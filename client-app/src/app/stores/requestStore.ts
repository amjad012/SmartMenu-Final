import { format } from "date-fns";
import { makeAutoObservable, runInAction } from "mobx"
import { Request } from "../models/request";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';


export default class RequestStore {
    requestRegistry = new Map<string, Request>();
    selectedRequest: Request | undefined = undefined;
    loadingInitial = false;
    loading = false;
    editMode = false;

    constructor() {
        makeAutoObservable(this)
    }
    get groupedRequests(){
        return(
            Object.entries(
                this.requestsByDate.reduce((requests,request)=>{
                    const date = format(request.date!, 'dd MMM yyyy');
                    requests[date] = requests[date] ? [...requests[date],request] : [request];
                    return requests; 
                },{} as {[key:string]: Request[]})
            )
        )
    }

    get requestsByDate() {
        return Array.from(this.requestRegistry.values()).sort((a, b) =>
            a.date!.getTime() - b.date!.getTime());
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
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
    private setRequest = (request: Request) => {
        request.date = new Date(request.date!);
        this.requestRegistry.set(request.id, request);
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


