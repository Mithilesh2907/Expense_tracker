import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

export default function PrivateRoutes({ children}) {
    const { session, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return session ? children : <Navigate to="/login" replace />;
}