import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    
    return user?.username ? <Outlet /> : <Navigate to="/login" />;
};
