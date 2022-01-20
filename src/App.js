import './App.css';

import Cards from './pages/cards'
import Cart from './pages/cart'
import About from './pages/about'
import Home from './pages/home'
import Menu from './components/menu';

import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/cart';
import Checkout from './pages/checkout';

function App() {

  return (
    <>
      <CartProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards/:category" element={<Cards />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App;
