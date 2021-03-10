import React from "react";
import "./Main.css";
import Logout from "../../components/Logout";

function Main(){
    return(
        <div className="main-page">
            <div className="left-section">
                <h2>Currency Converter</h2>
            </div>
            <div className="right-section">
                
            </div>
            <Logout className="logout-btn"/>
        </div>
    );
}

export default Main;