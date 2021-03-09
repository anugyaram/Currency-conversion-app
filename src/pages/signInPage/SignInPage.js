import React from "react";
import "./SignInPage.css";
import Login from "../../components/Login";


function SignIn(){
    return(
        <div className="sign-in">
            <div className="sign-in-card">
                <img 
                src="/image/signIn.jpg"
                className="sign-in-img" 
                alt="" />
                <div className="sign-in-card-body">
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default SignIn;