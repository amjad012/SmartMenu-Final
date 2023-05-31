import { makeAutoObservable } from "mobx";
import { Demand } from "../models/demand";

export default class DemandStore{
    demandRegistry = new Map<string,Demand>();
    selectedDemand: Demand | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }
    get groupedDemands(){
        return(
            Object.entries(
                this.demandsByDate.reduce((demands,demand)=>{
                    return demands; 
                },{} as {[key:string]: Demand[]})
            )
        )
    }
    get demandsByDate() {
        return Array.from(this.demandRegistry.values());

    }
}