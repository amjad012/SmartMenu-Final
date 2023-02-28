import { makeAutoObservable, runInAction } from "mobx";
import { Request } from "../models/request";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';

export default class requestStore {
    requestRegistry = new Map<string, Request>();
    selectedRequest?: Request = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }
    get groupedRequests(){
        return(
            Object.entries(
                this.requestsByDate.reduce((requests,request)=>{
                    const date = request.date;
                    requests[date] = requests[date] ? [...requests[date],request] : [request];
                    return requests; 
                },{} as {[key:string]: Request[]})
            )
        )
    }
    get requestsByDate() {
        return Array.from(this.requestRegistry.values()).sort((a, b) =>
            Date.parse(a.date) - Date.parse(b.date))
    }

    loadRequests = async () => {
        this.setLoadingInitial(true);
        try {
            const requests = await agent.Requests.list();
            requests.forEach(request => {
                this.setRequest(request);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadRequest = async (id: string) => {
        let request = this.getRequest(id);
        if (request) {
            this.selectedRequest = request;
            return request;
        }
        else {
            this.setLoadingInitial(true);
            try {
                request = await agent.Requests.details(id);
                this.setRequest(request);
                runInAction(() => this.selectedRequest = request);
                this.setLoadingInitial(false);
                return request;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setRequest = (request: Request) => {
        request.date = request.date.split('T')[0];
        this.requestRegistry.set(request.id, request);
    }

    private getRequest = (id: string) => {
        return this.requestRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createRequest = async (request: Request) => {
        this.loading = true;
        request.id = uuid();
        try {
            await agent.Requests.create(request);
            runInAction(() => {
                this.requestRegistry.set(request.id, request);
                this.selectedRequest = request;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    updateRequest = async (request: Request) => {
        this.loading = true;
        try {
            await agent.Requests.update(request)
            runInAction(() => {
                this.requestRegistry.set(request.id, request);
                this.selectedRequest = request;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    deleteRequest = async (id: string) => {
        this.loading = true;
        try {
            await agent.Requests.delete(id);
            runInAction(() => {
                this.requestRegistry.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }


}