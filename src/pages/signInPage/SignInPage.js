import React from "react";
import "./SignInPage.css";
import Login from "../../components/Login";
import Logout from "../../components/Logout";

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
                    <Logout />
                </div>
            </div>
        </div>
    );
}

export default SignIn;