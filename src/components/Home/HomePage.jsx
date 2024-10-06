import React from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

function HomePage() {
    const history = useHistory();

    const handleOrderClick = () => {
        history.push("/order");
    };


    return (
     <div className="home-container">
        <div className="content">
            <h1>Teknolojik Yemekler</h1>
            <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
            <button onClick={handleOrderClick} className="order-button">ACIKTIM</button>
        </div>
     </div>
    );
}


export default HomePage;