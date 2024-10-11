import React from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import HomeComponent from "./HomeComponent";

function HomePage() {
    const history = useHistory();

    const handleOrderClick = () => {
        history.push("/order");
    };

    const menuCategories = [
        { icon: '1.svg', name: 'Yeni! Kore' },
        { icon: '2.svg', name: 'Pizza' },
        { icon: '3.svg', name: 'Burger' },
        { icon: '4.svg', name: 'Kızartmalar' },
        { icon: '5.svg', name: 'Fast Food' },
        { icon: '6.svg', name: 'Gazlı İçecek' },
    ];

    return (
     <div className="home-container">
        <div className="hero-section">
            <h1>Teknolojik Yemekler</h1>
            <div className="hero-content">
            <p className="highlight">fırsatı kaçırma</p>
            <p className="main-text"><span>KOD</span> <span>ACIKTIRIR</span><br /><span>PİZZA,</span> <span>DOYURUR</span></p>
            <button onClick={handleOrderClick} className="order-button">ACIKTIM</button>
        </div>
        </div>
        
        <div className="menu-categories">
            <ul>
                {menuCategories.map((category, index) => (
                    <li key={index}>
                        <div className="category-item">
                        <img src={`/icons/${category.icon}`} alt={category.name} />
                        <span>{category.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <HomeComponent />
     </div>
    );
}


export default HomePage;