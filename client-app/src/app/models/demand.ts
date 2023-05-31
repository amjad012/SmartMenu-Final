export interface Demand {
    id: string;
    body : string;
}

export class Demand implements Demand {
    constructor(init?:DemandFormValues){
        Object.assign(this,init);
    }
}

export class DemandFormValues{
    id?:string = undefined;
    body?:'';

    constructor(demand?:DemandFormValues){
        if(demand){
            this.id = demand.id;
            this.body = demand.body;
        }
    }
}