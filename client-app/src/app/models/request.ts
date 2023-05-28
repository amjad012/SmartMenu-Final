

export interface Request
{
    id:string;
    name:string;
    date: Date | null;
    requests:Request[];
}

export class Request implements Request {
    constructor(init?:RequestFormValues){
        Object.assign(this, init);
    }
}
export class RequestFormValues{
    id?:string = undefined;
    name?:string = undefined;
    date : Date | null = null;

    constructor(request?: RequestFormValues){
        if(request){
            this.id = request.id;
            this.date = request.date;
            this.name = request.name;
        }
    }
}