import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context";

export default function PrivateRoutes() {
    const { session, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return session ? <Outlet /> : <Navigate to="/login" replace />;
}