import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
            }
        );

        return () => {
        subscription?.unsubscribe();
        };
    }, []);

    const value = {
        user,
        session,
        loading,
        signOut: () => supabase.auth.signOut(),
    };

    return (
        <AuthContext.Provider value = {value}>
            {loading ?
             (<div className="flex items-center justify-center min-h-screen text-gray-400">
                Loading Application......
                </div>): children}
        </AuthContext.Provider>
    );
};