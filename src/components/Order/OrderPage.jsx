import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Label, Button, Card, CardBody, Input, CardText, FormGroup, } from "reactstrap";
import "./OrderPage.css";


const OrderPage = () => {
 const history = useHistory();

 const [size, setSize] = useState("");
 const [dough, setDough] = useState("");
 const [extras, setExtras] = useState([]);
 const [extrasError, setExtrasError] = useState("");
 const [note, setNote] = useState("");
 const [quantity, setQuantity] = useState(1);
 const [total, setTotal] = useState(85.50);

 const extraOptions = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno"];

 useEffect(() => {
    const extrasTotal = extras.length * 5;
    setTotal(85.50 + extrasTotal);
 }, [extras, quantity]);

 const handleExtraChange = (extra) => {
    if (extras.includes(extra)) {
        setExtras(extras.filter(item => item !== extra));
    } else if (extras.length < 10) {
        setExtras([...extras, extra]);
    }
    setExtrasError("");
 };

 const validateExtras = () => {
    if (extras.length < 4) {
        setExtrasError("En az 4 adet malzeme seçmelisiniz.");
        return false;
    }
    return true;
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    if (size && dough && validateExtras()) {
        history.push("/success");
    } else {
        alert("Lütfen gerekli alanları doldurunuz.");
    }
 };


    return (
        <div className="order-page">
            <div className="app-header">
            <h1>Teknolojik Yemekler</h1>
            <p>Anasayfa - Sipariş Oluştur</p>
            </div>
            
            <div className="order-content">
            <Card className="order-card">
                <CardBody>
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className="d-flex justify-content-between align-items-center mb3">
                    <h3 className="mb-0">85.50₺</h3> 
                    <span>4.9 (200)</span>
                    </div>
                    <CardText>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                    </CardText>


            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="size">Boyut Seç *</Label>
                    <div className="size-options">
                    {['Küçük', 'Orta', 'Büyük'].map((boyut, index) => (
                        <FormGroup check inline key={index}>
                            <Label check>
                                <Input
                                type="radio" name="size" 
                                value={boyut}
                                onChange={(e) => setSize(e.target.value)} 
                                required={index===0} />{' '}
                                {boyut}
                            </Label>
                            </FormGroup>
                    ))}
                    </div>
                </FormGroup>


                <FormGroup>
                    <Label for="dough-select">Hamur Seç*</Label>
                    <Input
                    type="select"
                    id="dough-select"
                    value={dough}
                    onChange={(e) => setDough(e.target.value)}
                    required>
                        <option value="">Hamur Kalınlığı</option>
                        <option value="Kalın">Kalın</option>
                        <option value="İnce">İnce</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Ek Malzemeler</Label>
                    <p className="small">En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="extra-options">
                    {extraOptions.map((extra, index) => ( <FormGroup check inline key={index}>
                        <Label check>
                            <Input
                            type="checkbox"
                            id={`extra-${index}`}
                            value={extra}
                            checked={extras.includes(extra)}
                            onChange={() => handleExtraChange(extra)}
                            disabled={extras.length >= 10 && !extras.includes(extra)} />{' '}
                            {extra}
                        </Label>
                        </FormGroup>
                        ))}
                        </div>
                        {extrasError && <p className="text-danger small">{extrasError}</p>}
                </FormGroup>

                <FormGroup>
                    <Label for="order-note">Sipariş Notu</Label>
                    <Input
                    type="textarea"
                    id="order-note"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    value={note}
                    onChange={(e) => setNote(e.target.value)} />
                </FormGroup>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="quantity-selector">
                        <Button color="warning" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
                        <span className="mx-2">{quantity}</span>
                        <Button color="warning" onClick={() => setQuantity(Math.max(1, quantity + 1))}>+</Button>
                        </div>

                    <div className="order-summary">
                        <p className="mb-0">Seçimler: {(total - 85.50).toFixed(2)}₺</p>
                        <p className="mb-0">Toplam: {(total * quantity).toFixed(2)}₺</p>
                        <Button color="warning" type="submit" block>SİPARİŞ VER</Button>
                    </div>
                    </div>

                
            </Form>
            </CardBody>
            </Card>
            </div>
        </div>
    );
};


export default OrderPage;