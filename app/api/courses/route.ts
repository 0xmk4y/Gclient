import { createClient } from "@/app/utils/supabase/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { email, password } = body;

        const supabase = await createClient();

        const { data, error } = await supabase.auth.signInWithPassword({email: email, password: password})

        if (error) {
            console.error('Supabase error:', error.message);
            return new Response(JSON.stringify({
                success: false,
                message: error.message
            }), { status: 400 });
        }

        return new Response(JSON.stringify({
            success: true,
            message: 'Login successful',
            user: data.user
        }), { status: 200 });

    } catch (err: any) {
        console.error('Server error:', err);
        return new Response(JSON.stringify({
            success: false,
            message: 'Internal server error'
        }), { status: 500 });
    }
}
