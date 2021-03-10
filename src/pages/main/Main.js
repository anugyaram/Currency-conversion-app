import React from "react";
import "./Main.css";
import Logout from "../../components/Logout";
import RightForm from "../../components/RightForm";


function Main(){
    return(
        <div className="main-page"> 
            <RightForm  />
            <Logout className="logout-btn"/>
        </div>
    );
}

export default Main;