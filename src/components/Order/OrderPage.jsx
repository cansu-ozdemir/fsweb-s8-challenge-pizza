
import { useHistory } from "react-router-dom";
import { Form, Label, Button, Card, CardBody, Input, CardText, FormGroup, } from "reactstrap";
import "./OrderPage.css";
import axios from "axios";
import { PizzaOrder } from "./PizzaOrder";


const OrderPage = () => {
 const history = useHistory();

 const { name, size, dough, extras, note, quantity, basePrice, extraPrice, minExtras, maxExtras } = PizzaOrder();

 


 const handleExtraChange = (extra) => {
    extras.set(prevExtras => {
        if (prevExtras.includes(extra)) { 
            return prevExtras.filter(item => item !== extra);
        }
        if (prevExtras.length < maxExtras) {
            return [...prevExtras, extra];
        }
        return prevExtras;
    });
};

 const validateExtras = () => 
      extras.value.length >= minExtras;

const calculateTotal = () => {
    const extrasTotal = extras.value.length * extraPrice;
    return (basePrice + extrasTotal) * quantity.value;
};

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (size.value && dough.value && validateExtras()) {
        try {
            const orderData = {
                isim: name, boyut: size.value, hamur: dough.value, malzemeler: extras.value, notlar: note.value, miktar: quantity.value, toplam: calculateTotal().toFixed(2)
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
            <p><a href="/">Anasayfa</a> - <span>Sipariş Oluştur</span></p>
            </div>
            
            <div className="order-content">
            <Card className="order-card">
                <CardBody>
                    <h2>{name}</h2>
                    <div>
                    <h3>{basePrice.toFixed(2)}₺</h3> 
                    <span>4.9 (200)</span>
                    </div>
                    <CardText>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                    </CardText>


            <Form onSubmit={handleSubmit}>
                <FormGroup className="size-dough">
                    <div className="size-section">
                    <Label for="size">Boyut Seç <span style={{color: '#ce2829'}}>*</span></Label>
                    <div className="size-options">
                    {size.options.map((boyut, index) => (
                        <FormGroup check inline key={index}>
                            <Label check>
                                <Input
                                type="radio" name="size" 
                                value={boyut}
                                onChange={(e) => size.set(e.target.value)} 
                                required={index===0} />{' '}
                                {boyut}
                            </Label>
                            </FormGroup>
                    ))}
                    </div>
                    </div>


                <div className="dough-section">
                    <Label for="dough-select">Hamur Seç <span style={{color: '#ce2829'}}>*</span></Label>
                    <Input
                    type="select"
                    id="dough-select"
                    value={dough.value}
                    onChange={(e) => dough.set(e.target.value)}
                    required>
                        <option value="">Hamur Kalınlığı</option>
                        {dough.options.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </Input>
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="extra-select">Ek Malzemeler</Label>
                    <p>En az {minExtras} ve en fazla {maxExtras} malzeme seçebilirsiniz. {extraPrice}₺</p>
                    <div className="extra-options">
                    {extras.options.map((extra, index) => ( <FormGroup check inline key={index}>
                        <Label check>
                            <Input
                            type="checkbox"
                            id={`extra-${index}`}
                            value={extra}
                            checked={extras.value.includes(extra)}
                            onChange={() => handleExtraChange(extra)}
                            disabled={extras.value.length >= maxExtras && !extras.value.includes(extra)} />{' '}
                            {extra}
                        </Label>
                        </FormGroup>
                        ))}
                        </div>
                </FormGroup>

                <FormGroup>
                    <Label for="order-note">Sipariş Notu</Label>
                    <Input
                    type="textarea"
                    id="order-note"
                    data-cy="order-note"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    value={note.value}
                    onChange={(e) => note.set(e.target.value)} />
                </FormGroup>

                <div className="order-summary">
                    <div className="quantity-selector">
                        <Button onClick={() => quantity.set(prev => Math.max(1, prev - 1))}>-</Button>
                        <span>{quantity.value}</span>
                        <Button onClick={() => quantity.set(prev => prev + 1)}>+</Button>
                        </div>

                    <div className="order-total">
                        <div className="order-math">
                        <h1>Sipariş Toplamı</h1>
                        <p><span>Seçimler</span> <span>{(calculateTotal() - basePrice).toFixed(2)}₺</span></p>
                        <p><span>Toplam</span> <span>{calculateTotal().toFixed(2)}₺</span> </p>
                        </div>
                        <Button type="submit" block>SİPARİŞ VER</Button>
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