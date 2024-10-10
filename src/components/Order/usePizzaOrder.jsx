import  { useState } from "react";

export const usePizzaOrder = () => {
const initialState = {
   name: "Position Absolute Acı Pizza",
   size: "",
   dough: "",
   extras: [],
   note: "",
   quantity: 1,
   basePrice: 85.50,
   extraPrice: 5,
   minExtras: 4,
   maxExtras: 10,
};

const [pizzaOrder, setPizzaOrder] = useState(initialState);

const resetOrder = () => {
   setPizzaOrder(initialState);
};

const updateOrder = (newData) => {
   setPizzaOrder(prevOrder => ({...prevOrder, ...newData}));
};

const setSize = (newSize) => updateOrder({size: newSize});
const setDough = (newDough) => updateOrder({dough: newDough});
const setExtras = (newExtras) => updateOrder({extras: newExtras});
const setNote = (newNote) => updateOrder({note: newNote});
const setQuantity = (newQuantity) => updateOrder({quantity: newQuantity});

const sizeOptions = ['S', 'M', 'L'];
const doughOptions = ['Süper İnce', 'İnce', 'Kalın'];
const extrasOptions = ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak", "Kanada Jambonu", "Domates", "Jalepeno"];

return{
   pizzaOrder,
   updateOrder,
   setSize,
   setDough,
   setExtras,
   setNote,
   setQuantity,
   sizeOptions,
   doughOptions,
   extrasOptions,
   resetOrder,
};
};