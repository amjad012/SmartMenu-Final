import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import TableDashboard from "../../features/tables/dashboard/TableDashboard";
import TableDetails from "../../features/tables/details/TableDetails";
import TableForm from "../../features/tables/form/TableForm";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import RequestDashboard from "../../features/requests/dshboard/RequestDashboard";
import RequestForm from "../../features/requests/form/RequestForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            //for table
            {path: 'tables', element: <TableDashboard />},
            {path: 'tables/:id', element: <TableDetails />},
            {path: 'createTable', element: <TableForm key='create' />},
            {path: 'manage/:id', element: <TableForm key='manage' />},

            //for request
            {path: 'requests', element: <RequestDashboard />},
            // {path: 'requests/:id', element: <RequestDetails />},
            {path: 'createRequest', element: <RequestForm key='create' />},
            {path: 'manage/:id', element: <RequestForm key='manage' />},

            //for handling errors
            {path: 'errors', element: <TestErrors />},
            {path: 'not-found', element: <NotFound />},
            {path: 'server-error', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found' />},
        ]
    }
]

export const router = createBrowserRouter(routes);