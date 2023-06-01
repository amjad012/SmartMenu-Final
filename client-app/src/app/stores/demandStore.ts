import { makeAutoObservable, runInAction } from "mobx";
import { Demand, DemandFormValues } from "../models/demand";
import agent from "../api/agent";
import { store } from "./store";

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
    loadDemands = async() => {
        this.loadingInitial = true;
        try{
            const demands = await agent.Demands.list();
            demands.forEach(demand => {
                this.setDemand(demand)
            })
            this.setLoadingInitial(false);
        }
        catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }
    private setDemand = (demand: Demand) => {
      
        this.demandRegistry.set(demand.id, demand);
    }
    private getDemand = (id: string) => {
        return this.demandRegistry.get(id);
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createDemand = async (table: DemandFormValues) => {
        
        try {
            await agent.Demands.create(table);
            const newDemand = new Demand(table);
            this.setDemand(newDemand);
            runInAction(() => {
                this.selectedDemand = newDemand;
            })
        } catch (error) {
            console.log(error);
        }
    }
    updateDemand = async (demand: DemandFormValues) => {
        try {
            await agent.Demands.update(demand)
            runInAction(() => {
                if(demand.id){
                    let updatedDemand = {... this.getDemand(demand.id),...demand}
                    this.demandRegistry.set(demand.id, updatedDemand as Demand);
                    this.selectedDemand = updatedDemand as Demand;
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    deleteDemand = async (id: string) => {
        this.loading = true;
        try {
            await agent.Demands.delete(id);
            runInAction(() => {
                this.demandRegistry.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })


        }
    }
    clearSelectedDemand = () => {
        this.selectedDemand = undefined;
    }
}