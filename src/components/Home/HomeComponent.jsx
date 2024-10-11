import React from "react";
import './HomeComponent.css';
import { useHistory } from "react-router-dom";

const HomeComponent = () => {

    const history = useHistory();

    const handleOrderClick = () => {
        history.push("/order");
    };


    const addCards = [
        {title: "Özel Lezzetus", subtitle: "Position:Absolute Acı Burger", image: "kart-1.png"},
        {title: "Hackathlon Burger Menü", image: "kart-2.png"},
        {title: "Çoooook hızlı npm gibi kurye", image: "kart-3.png"}
    ];

    const categories = [
        {name: "Ramen", icon: "1.svg"},
        {name: "Pizza", icon: "2.svg"},
        {name: "Burger", icon: "3.svg"},
        {name: "French Fries", icon: "4.svg"},
        {name: "Fast Food", icon: "5.svg"},
        {name: "Soft Drinks", icon: "6.svg"}
    ];


    const products = [
        {name: "Terminal Pizza", price: "80₺", rate: "4.9 (200)", image: "food-1.png"},
        {name: "Position Absolute Acı Pizza", price: "80₺", rate: "4.9 (200)", image: "food-2.png"},
        {name: "useEffect Tavuklu Burger", price: "80₺", rate: "4.9 (200)", image: "food-3.png"}
    ];

    return (
        <div className="home-component">
            <div className="add-cards-container">
                    <div className="add-card card-1">
                        <div className="card-content">
                        <h2 className="card-h1">Özel <br />Lezzetus</h2>
                        <p className="card-p1">{addCards[0].subtitle}</p>
                        <button className="card-button" onClick={handleOrderClick}>SİPARİŞ VER</button>
                        </div>
                        </div>
                        
                        <div className="add-cards-right">
                            <div className="add-card card-2">
                                <div className="card-content">
                                    <h2 className="card-h2">Hackathlon <br />Burger Menü</h2>
                                    <button className="card-button" onClick={handleOrderClick}>SİPARİŞ VER</button>
                                    </div>
                                    </div>
                                    <div className="add-card card-3">
                                        <div className="card-content">
                                            <h2 className="card-h3">Çoooook hızlı <br />npm gibi kurye</h2>
                                            <p>{addCards[2].subtitle}</p>
                                    <button className="card-button" onClick={handleOrderClick}>SİPARİŞ VER</button>
                                    </div>
                                    </div>
            </div>
            </div>

            <h3 className="section-title">en çok paketlenen menüler</h3>
            <h2 className="section-subtitle">Acıktıran Kodlara Doyuran Lezzetler</h2>

            <div className="categories">
                {categories.map((categories, index) => (
                    <div key={index} className="category-section">
                        <img src={`/icons/${categories.icon}`} alt={categories.name} />
                        <span>{categories.name}</span>
                        </div>
                ))}
            </div>

            <div className="products">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={`/pictures/${product.image}`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <div className="product-info">
                        <p className="price">{product.price}</p>
                        <p className="rate">{product.rate}</p>
                        </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default HomeComponent;