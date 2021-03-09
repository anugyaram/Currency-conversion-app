import React from "react";
import { useGoogleLogout } from "react-google-login";

const clientId = "586328222404-f4sqh2p0raufaltija08bduiic5goqvq.apps.googleusercontent.com.apps.googleusercontent.com";

function Logout(){
    const onLogoutSuccess = (res) => {
        alert("Loggedout Successfully");
    };

    const onFailure = () => {
        console.log("Handle failure case");
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onFailure,
        onLogoutSuccess
    });

    return(
        <button onClick={signOut} >
            Sign out
        </button>
    );
}

export default Logout;