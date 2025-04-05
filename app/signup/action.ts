'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { createClient } from '@/utils/supabase/server'

// Define Zod schema for validation
const signupSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export async function signup(prevState: any, formData: FormData) {
    const supabase = await createClient()

    // Convert FormData to an object
    const form = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
    }

    // Validate form data using Zod
    const parsed = signupSchema.safeParse(form)

    if (!parsed.success) {
        console.log('Validation errors:', parsed.error.errors)
        return { success: false, message: parsed.error.errors }
    }

    const validatedData = parsed.data

    console.log('Signup data:', validatedData)
    const { data, error } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
            data: {
                firstName: validatedData.firstName,
                lastName: validatedData.lastName,
            },
        },
    })

    if (error) {
        console.log('Signup error:', error)
        return { success: false, message: error.message }
    }

    console.log('Signup response:', data)
    return { success: true, message: 'Signup successful' }
}
