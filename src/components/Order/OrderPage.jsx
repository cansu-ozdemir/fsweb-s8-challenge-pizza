
import { useHistory } from "react-router-dom";
import { Form, Label, Button, Card, CardBody, Input, CardText, FormGroup, } from "reactstrap";
import "./OrderPage.css";
import axios from "axios";


const OrderPage = ({
    pizzaOrder,
    setSize,
    setDough,
    setExtras,
    setNote,
    setQuantity,
    sizeOptions,
    doughOptions,
    extrasOptions
}) => {
 const history = useHistory();

 const { name, size, dough, extras, note, quantity, basePrice, extraPrice, minExtras, maxExtras } = pizzaOrder;

 


 const handleExtraChange = (extra) => {
    const newExtras = extras.includes(extra)
    ? extras.filter(item => item !== extra) 
    : extras.length < maxExtras
    ? [...extras, extra]
    : extras;
    setExtras(newExtras);
};

 const validateExtras = () => 
      extras.length >= minExtras;

const calculateTotal = () => {
    const extrasTotal = extras.length * extraPrice;
    return (basePrice + extrasTotal) * quantity;
};

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (size && dough && validateExtras()) {
        try {
            const orderData = {
                isim: name, 
                boyut: size, 
                hamur: dough, 
                malzemeler: extras, 
                notlar: note, 
                miktar: quantity, 
                toplam: calculateTotal().toFixed(2)
            };

            const response = await axios.post('https://reqres.in/api/pizza', orderData);
            console.log("Sipariş Özeti:", response.data);

        history.push("/success");
        } catch (error) {
            console.error(error);
        }
    } else {
        alert("Lütfen gerekli alanları doldurunuz.");
    }
 };


    return (
        <div className="order-page">
            <div className="order-header">
            <h1>Teknolojik Yemekler</h1>
            </div>
            
            <div className="order-content">
            <div className="pizza-info">
                <div className="pizza-info-add">
            <img src="/pictures/form-banner.png" alt="Pizza" className="pizza-image" />
            <p><a href="/">Anasayfa</a> - <span>Sipariş Oluştur</span></p>
           
                    <h2>{name}</h2>
                    <div className="pizza-price-rating">
                    <h3>{basePrice.toFixed(2)}₺</h3> 
                    <span className="rating">4.9 (200)</span>
                    </div>
                    <p className="pizza-description">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                    </div>
                    </div>


            <Form onSubmit={handleSubmit}>
                <FormGroup className="size-dough">
                    <div className="size-section">
                    <Label for="size">Boyut Seç <span style={{color: '#ce2829'}}>*</span></Label>
                    <div className="size-options">
                    {sizeOptions.map((boyut, index) => (
                        <Label key={index} className={`size-option ${size === sizeOptions[index] ? 'selected' : ''}`}>
                                <Input
                                type="radio" name="size" 
                                value={sizeOptions[index]}
                                onChange={(e) => setSize(e.target.value)}
                                checked={size === sizeOptions[index]} 
                                required={index===0} />
                                {boyut}
                            </Label>
                    ))}
                    </div>
                    </div>


                <div className="dough-section">
                    <Label for="dough-select">Hamur Seç <span style={{color: '#ce2829'}}>*</span></Label>
                    <Input
                    type="select"
                    id="dough-select"
                    className="dough-select"
                    value={dough}
                    onChange={(e) => setDough(e.target.value)}
                    required>
                        <option value="" disabled>Hamur Kalınlığı</option>
                        {doughOptions.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </Input>
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="extra-select">Ek Malzemeler</Label>
                    <p className="extras-info">En az {minExtras} ve en fazla {maxExtras} malzeme seçebilirsiniz. {extraPrice}₺</p>
                    <div className="extra-options">
                    {extrasOptions.map((extra, index) => ( <label key={index} className="checkbox-container">
                        {extra}
                            <Input
                            type="checkbox"
                            id={`extra-${index}`}
                            value={extra}
                            checked={extras.includes(extra)}
                            onChange={() => handleExtraChange(extra)}
                            disabled={extras.length >= maxExtras && !extras.includes(extra)} />
                            <span className="checkmark"></span>
                        </label>
                        ))}
                        </div>
                </FormGroup>

                <FormGroup>
                    <Label for="order-note">Sipariş Notu</Label>
                    <Input
                    type="textarea"
                    id="order-note"
                    className="note-textarea"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    value={note}
                    onChange={(e) => setNote(e.target.value)} />
                </FormGroup>

                <div className="order-summary">
                    <div className="quantity-selector">
                        <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
                        <span>{quantity}</span>
                        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
                        </div>

                    <div className="order-total">
                        <h1>Sipariş Toplamı</h1>
                        <div className="total-row">
                        <p><span>Seçimler</span> <span>{(calculateTotal() - basePrice).toFixed(2)}₺</span></p>
                        </div>
                        <div className="total-row">
                        <p><span>Toplam</span> <span>{calculateTotal().toFixed(2)}₺</span> </p>
                        </div>
                        <Button type="submit" block>SİPARİŞ VER</Button>
                    </div>
                    </div>
            </Form>
            </div>
        </div>
    );
};


export default OrderPage;