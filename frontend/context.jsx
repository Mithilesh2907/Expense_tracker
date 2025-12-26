import { Children, createContext, use, useContext } from "react";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";



const AuthContext = createContext(null);
export default useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        });

        const {data: listener} = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );
        return () => {
            listener?.unsubscribe();
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
            {loading ? <div>Loading Application......</div>: children}
        </AuthContext.Provider>
    );
};