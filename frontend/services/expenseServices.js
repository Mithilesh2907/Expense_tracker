import { supabase } from "../src/supabase";

export async function addExpense(expenseData) {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    console.log("Auth user:", user);

    if (!user || userError) {
        throw new Error("User is not authenticated");
    }

    const { error } = await supabase.from("expenses").insert({
        user_id: user.id,
        amount: expenseData.amount,
        type: expenseData.type,
        category: expenseData.category,
        note: expenseData.note,
        date: expenseData.date
    });

    if (error) {
        throw error;
    }
}



export async function fetchExpenses(limit = 5) {
    const { data, error } =  await supabase
        .from("expenses")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(limit);

    if (error) {
        throw error;
    }

    return data;
}



export async function fetchAllExpenses() {
    const { data, error } =  await supabase
        .from("expenses")
        .select("*")

    if (error) {
        throw error;
    }

    return data;
}