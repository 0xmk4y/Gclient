import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.method, req.body);
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    try {
        const { email, password, confirmPassword } = req.body;

        const response = await fetch('https://tmp-se-project.azurewebsites.net/api/user/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, confirmPassword }),
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error('Signup API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
