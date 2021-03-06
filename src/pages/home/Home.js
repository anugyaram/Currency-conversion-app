import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

function Home(){
    let history = useHistory();

    const onClickSignIn = () => {
        history.push("/signin");
    }

    return(
        <div>
            <div className="home-page">
                <div className="home-heading">
                    CURRENCY CONVERTER
                </div>
                <div className="text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                </div>
            </div>
            <button className="btn"  onClick={onClickSignIn} >Get started</button>
        </div>
    );
}

export default Home;
//