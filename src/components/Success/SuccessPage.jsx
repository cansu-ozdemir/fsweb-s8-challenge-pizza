import  { useEffect } from "react";
import "./SuccessPage.css";
import { useHistory } from "react-router-dom";


function SuccessPage({pizzaOrder}) {

    const history = useHistory();

     useEffect(() => {
        const timeoutId = setTimeout(() => {
            history.push('/');
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [history]); 

    const calculateTotal = () => {
        const basePrice = pizzaOrder.basePrice * pizzaOrder.quantity;
        const extrasPrice = pizzaOrder.extras.length * pizzaOrder.extraPrice;
        return basePrice + extrasPrice
    };

    const total = calculateTotal();

    

    return (
        <div className="success-page">
            <div className="success-header">
                <h1>Teknolojik Yemekler</h1>
            </div>
            <div className="success-content">
                <p className="success-subtitle">lezzetin yolda</p>
                <h2 className="success-title">SİPARİŞ ALINDI</h2>

                <div className="yatay-cizgi"></div>

                <div className="order-details">
                    <h3>{pizzaOrder.name}</h3>
                    <p>Boyut: <strong>{pizzaOrder.size}</strong></p>
                    <p>Hamur: <strong>{pizzaOrder.dough}</strong></p>
                    <p>Ek Malzemeler: <strong>{pizzaOrder.extras.join(",")}</strong></p>
                    {pizzaOrder.note && pizzaOrder.note.trim() !== "" && (<p>Not: {pizzaOrder.note}</p>)}
                </div>
                <div className="order-total">
                    <h4>Sipariş Toplamı</h4>
                    <div className="total-row">
                        <span>Seçimler</span>
                        <span>{(pizzaOrder.extras.length * pizzaOrder.extraPrice).toFixed(2)}₺</span>
                    </div>
                    <div className="total-row">
                        <span>Toplam</span>
                        <span>{total.toFixed(2)}₺</span>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default SuccessPage;