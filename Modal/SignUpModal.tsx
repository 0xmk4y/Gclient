import React from 'react'
import { Mail, Lock } from 'lucide-react'

export default function SignUpModal() {
return (
    <div className='bg-white text-black border p-4 absolute ' style={{ top: '50px', right: '200px' }}>
            <h4 className='font-bold'>Signup</h4>
            <div>Signup using Google</div>
            <p>or</p>
            <form action="">
                <div className='border flex px-2 py-1'>
                    <Mail />
                    <input type="text" name="email" id="" className='focus:outline-none px-2'/>
                </div>
                <div className='border flex px-2 py-1'>
                    <Lock />
                    <input type="password" name="password" id="" className='focus:outline-none px-2'/>
                </div>
            </form>
    </div>
)
}
