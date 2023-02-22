import axios, { AxiosResponse } from 'axios';
import { Table } from '../models/table';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error)
    }
})

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Tables = {
    list: () => requests.get<Table[]>(`/tables`),
    details: (id: string) => requests.get<Table>(`/tables/${id}`),
    create: (table: Table) => requests.post<void>(`/tables`, table),
    update: (table: Table) => requests.put<void>(`/tables/${table.id}`, table),
    delete: (id: string) => requests.del<void>(`/tables/${id}`)
}

const agent = {
    Tables
}

export default agent;