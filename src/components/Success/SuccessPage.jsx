import React, { useEffect } from "react";
import "./SuccessPage.css";
import { useHistory } from "react-router-dom";

function SuccessPage() {

    const history = useHistory();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            history.push('/');
        }, 5000);

        return () => clearTimeout(timeoutId);
<<<<<<< HEAD
    }, [history]);
=======
    }, [history]); 
>>>>>>> 60620414065f87fa0f0b0fd519b0eff695bc8d24

    return (
        <div className="success-page">
            <div className="success-header">
                <h1>Teknolojik Yemekler</h1>
            </div>
            <div className="success-content">
                <p>TEBRİKLER!</p>
                <p><span>SİPARİŞİNİZ</span> <span>ALINDI!</span></p>
            </div>
            </div>
    );
};

export default SuccessPage;