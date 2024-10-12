import React from "react";
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h1>Teknolojik <br /> Yemekler</h1>
                <p>
                <img src="/icons/icon-1.png" className="footer-icon" />
                341 Londonderry Road,<br />Istanbul Türkiye
                </p>
                <p>
                <img src="/icons/icon-2.png" className="footer-icon" />
                aciktim@teknolojikyemekler.com
                </p>
                <p>
                <img src="/icons/icon-3.png" className="footer-icon" />
                +90 216 123 45 67
                </p>
            </div>

            <div className="footer-middle">
                <h3>Hot Menu</h3>
                <p>Terminal Pizza</p>
                <p>5 Kişilik Hackathlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz  Console Frosty</p>
                <p>Testler Geçti Mutlu Burger</p>
                <p>Position Absolute Acı Burger</p>
            </div>

            <div className="footer-right">
                <h3>Instagram</h3>
                <div className="instagram-photos">
                    {[0, 1, 2, 3, 4, 5]. map((num) => (
                        <img key={num} src={`/assets/Iteration-2-aseets/footer/insta/li-${num}.png`}
                        alt={`Instagram post ${num+1}`} />
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;