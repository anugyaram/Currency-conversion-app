import React from "react";
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
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: "offline",
    });

    return(
        <button onClick={signIn} className="button" >
            Sign In with Google
        </button>
    );
}

export default Login;