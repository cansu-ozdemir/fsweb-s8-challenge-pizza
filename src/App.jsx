
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import OrderPage from './components/Order/OrderPage';
import SuccessPage from './components/Success/SuccessPage';
import Footer from './components/Footer'
import { usePizzaOrder } from './components/Order/usePizzaOrder';


function App() {

  const {
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
    resetOrder
  } = usePizzaOrder();


  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/order" render={(props) => (
          <OrderPage
          {...props}
          pizzaOrder={pizzaOrder}
          updateOrder={updateOrder}
          setSize={setSize}
          setDough={setDough}
          setExtras={setExtras}
          setNote={setNote}
          setQuantity={setQuantity}
          sizeOptions={sizeOptions}
          doughOptions={doughOptions}
          extrasOptions={extrasOptions} />
        )} 
        />
        <Route path="/success" render={(props) => (
          <SuccessPage
          {...props}
          pizzaOrder={pizzaOrder}
          resetOrder={resetOrder} />
        )}
        />
      </Switch>
      <Footer />
      </div>
  )
}

export default App
