import  { useState } from "react";

export const PizzaOrder = () => {
 const [size, setSize] = useState("");
 const [dough, setDough] = useState("");
 const [extras, setExtras] = useState([]);
 const [note, setNote] = useState("");
 const [quantity, setQuantity] = useState(1);

 return {
    name: "Position Absolute Acı Pizza",
    size: { value: size, set: setSize, options: ['Küçük', 'Orta', 'Büyük'] },
    dough: { value: dough, set: setDough, options: ['Süper İnce', 'İnce', 'Kalın'] },
    extras: { value: extras, set: setExtras, options: ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno"] },
    note: { value: note, set:setNote },
    quantity: {value: quantity, set: setQuantity },
    basePrice: 85.50,
    extraPrice: 5,
    minExtras: 4,
    maxExtras: 10
 };
};