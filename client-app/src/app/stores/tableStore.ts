import { makeAutoObservable, runInAction } from "mobx";
import { Table } from "../models/table";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { format } from "date-fns";

export default class TableStore {
    tableRegistry = new Map<string, Table>();
    selectedTable: Table | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }
    get groupedTables(){
        return(
            Object.entries(
                this.tablesByDate.reduce((tables,table)=>{
                    const date = format(table.date!, 'dd MMM yyyy');
                    tables[date] = tables[date] ? [...tables[date],table] : [table];
                    return tables; 
                },{} as {[key:string]: Table[]})
            )
        )
    }

    get tablesByDate() {
        return Array.from(this.tableRegistry.values()).sort((a, b) =>
            a.date!.getTime() - b.date!.getTime());
    }

    loadTables = async () => {
        this.loadingInitial=true;
        try {
            const tables = await agent.Tables.list();
            tables.forEach(table => {
                this.setTable(table);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadTable = async (id: string) => {
        let table = this.getTable(id);
        if (table) {
            this.selectedTable = table;
            return table;
        }
        else {
            this.setLoadingInitial(true);
            try {
                table = await agent.Tables.details(id);
                this.setTable(table);
                runInAction(() => this.selectedTable = table);
                this.setLoadingInitial(false);
                return table;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setTable = (table: Table) => {
        table.date = new Date(table.date!)
        this.tableRegistry.set(table.id, table);
    }

    private getTable = (id: string) => {
        return this.tableRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createTable = async (table: Table) => {
        this.loading = true;
        table.id = uuid();
        try {
            await agent.Tables.create(table);
            runInAction(() => {
                this.tableRegistry.set(table.id, table);
                this.selectedTable = table;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    updateTable = async (table: Table) => {
        this.loading = true;
        try {
            await agent.Tables.update(table)
            runInAction(() => {
                this.tableRegistry.set(table.id, table);
                this.selectedTable = table;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    deleteTable = async (id: string) => {
        this.loading = true;
        try {
            await agent.Tables.delete(id);
            runInAction(() => {
                this.tableRegistry.delete(id);
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