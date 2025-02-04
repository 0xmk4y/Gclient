"use client";
import React from 'react';
import { useState } from 'react';
import SignUpModal from './SignUpModal';
import ForgotPasswword from './ForgotPasswword';
import Otp from './Otp';
import Login from './Login';


export default function LoginModal() {

    const [active, setActive] = useState("login");

    return (
        <>
            {/* Login Modal */}
            { active === "login" && <Login setActive={setActive} /> }
    
            {/* Sign Up Modal */}
            {active === "signup" && <SignUpModal setActive={setActive} />}
    
            {/* Forgot Password */}
            {active === "forgot-pass" && <ForgotPasswword />}
    
            {/* OTP */}
            {active === "forgot-pass" && <Otp />}

        </>
    );
}
