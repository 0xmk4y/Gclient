import { createClient } from "@/app/utils/supabase/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { firstname, user_id, lastname, email, location, program, gender, disabled, phone, description} = body;

        const supabase = await createClient();
        const { data, error } = await supabase.from("learners").insert({
            firstname,
            user_id,
            lastname,
            email,
            location,
            program,
            gender,
            disabled,
            phone,
            description
        });
        if (error) {
            console.error('Supabase error:', error.message);
            return new Response(JSON.stringify({
                success: false,
                message: error.message
            }), { status: 400 });
        }
        console.log(data)
        return new Response(JSON.stringify({
            success: true,
            message: 'Created',
            // user: data.user
        }), { status: 200 });

    } catch (err: any) {
        console.error('Server error:', err);
        return new Response(JSON.stringify({
            success: false,
            message: 'Internal server error'
        }), { status: 500 });
    }
}
