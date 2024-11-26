import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icons from "../Assets/password.png";

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            {/* Header Section */}
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            {/* Input Fields */}
            <div className="inputs">
                {/* Show Name Input for Sign Up */}
                {action === "Sign up" && (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" width="30px"/>
                        <input type="text" placeholder="Name" />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="Email Icon" width="30px"/>
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={password_icons} alt="Password Icon" width="30px"/>
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            {/* Forgot Password Section (for Login only) */}
            {action === "Login" && (
                <div className="forgot-password">
                    Lost Password? <span>Click Here!</span>
                </div>
            )}

            {/* Submit Buttons */}
            <div className="submit-container">
                {/* Sign Up Button */}
                <div
                    className={action === "Sign up" ? "submit gray" : "submit"}
                    onClick={() => setAction("Sign up")}
                >
                    Sign Up
                </div>

                {/* Login Button */}
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
