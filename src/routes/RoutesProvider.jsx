import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import NotFound from "../pages/NotFound";
import PageTitle from "../components/PageTitle";
import config_routes from "./config/config_routes";
import employee_routes from "./employee/employeeRoutes";

export default function RoutesProvider() {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <PageTitle title={'Dashboard'} />
                    <Dashboard />
                </>
            } />
            <Route path='/login' element={
                <>
                    <PageTitle title={'Login'} />
                    <Login />
                </>
            } />
            
            {config_routes}
            {employee_routes}
            <Route path='*' Component={NotFound} />
        </Routes>
    );
}
