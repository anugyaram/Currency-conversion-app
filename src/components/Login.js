import React from "react";
import "./Login.css";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId = "586328222404-f4sqh2p0raufaltija08bduiic5goqvq.apps.googleusercontent.com";

function Login(){
    const onSuccess = (res) => {
        console.log("Login Success: currentUser:", res.profileObj );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log("Login Failed: res", res);
        alert.show('Oh look, an alert!')
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: "offline",
    });

    return(
        <button onClick={signIn} className="g-btn" >
            <img src="/image/google.png"
            alt=""
            className="google-logo" />
            <p>Sign In with Google</p> 
        </button>
    );
}

export default Login;