import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import OrderPage from './components/Order/OrderPage';
import ConfirmationPage from './components/Confirmation/ConfirmationPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/confirmation" element={<ConfirmationPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
