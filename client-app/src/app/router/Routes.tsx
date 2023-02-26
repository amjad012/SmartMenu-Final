import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import TableDashboard from "../../features/tables/dashboard/TableDashboard";
import TableDetails from "../../features/tables/details/TableDetails";
import TableForm from "../../features/tables/form/TableForm";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'tables', element: <TableDashboard />},
            {path: 'tables/:id', element: <TableDetails />},
            {path: 'createTable', element: <TableForm key='create' />},
            {path: 'manage/:id', element: <TableForm key='manage' />},
            {path: 'errors', element: <TestErrors />},
            {path: 'not-found', element: <NotFound />},
            {path: '*-found', element: <Navigate replace to='/not-found' />},
        ]
    }
]

export const router = createBrowserRouter(routes);