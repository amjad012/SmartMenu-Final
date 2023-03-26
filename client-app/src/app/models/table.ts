import { Profile } from "./profile";

export interface Table {
    id: string;
    date: Date | null;
    number:number;
    hostUsername:string;
    isCancelled:boolean;
    attendees?:Profile[]
    
}
