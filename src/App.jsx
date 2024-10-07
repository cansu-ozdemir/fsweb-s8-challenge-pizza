
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import OrderPage from './components/Order/OrderPage';
import ConfirmationPage from './components/Success/SuccessPage';



function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/order" component={OrderPage} />
        <Route path="/confirmation" component={ConfirmationPage}/>
      </Switch>
  )
}

export default App
