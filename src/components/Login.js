import React from "react";
import "./Login.css";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
import { useHistory } from "react-router-dom";

const clientId = "586328222404-f4sqh2p0raufaltija08bduiic5goqvq.apps.googleusercontent.com";

function Login(){
    let history = useHistory();

    const onSuccess = (res) => {
        console.log("Login Success: currentUser:", res.profileObj );
        refreshTokenSetup(res);
        history.push("/main");
    };

    const onFailure = (res) => {
        console.log("Login Failed: res", res);
        alert.show('Login Failed');
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
            className="google-logo" />&nbsp;&nbsp;
            <p>Sign In with Google</p> 
        </button>
    );
}

export default Login;