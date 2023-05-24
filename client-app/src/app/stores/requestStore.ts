import { format } from "date-fns";
import { makeAutoObservable } from "mobx"

export default class RequestStore {

    requestRegistry = new Map<string, Request>();

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
}
