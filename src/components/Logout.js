import React from "react";
import "./Logout.css";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const clientId = "586328222404-f4sqh2p0raufaltija08bduiic5goqvq.apps.googleusercontent.com";

function Logout(){
    let history = useHistory();

    const onLogoutSuccess = (res) => {
        history.push("/signin");
    };

    const onFailure = () => {
        console.log("Handle failure case");
        alert.show('Logout Failed');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onFailure,
        onLogoutSuccess
    });

    return(
        <button onClick={signOut} className="logout-btn">
           Logout 
        </button>
    );
}

export default Logout;