import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import TableDashboard from "../../features/tables/dashboard/TableDashboard";
import TableDetails from "../../features/tables/details/TableDetails";
import TableForm from "../../features/tables/form/TableForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'tables', element: <TableDashboard />},
            {path: 'tables/:id', element: <TableDetails />},
            {path: 'createTable', element: <TableForm key='create' />},
            {path: 'manage/:id', element: <TableForm key='manage' />},
        ]
    }
]

export const router = createBrowserRouter(routes);