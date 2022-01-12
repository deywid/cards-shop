import './App.css';

import Cards from './pages/cards'
import About from './pages/about'
import Home from './pages/home'
import Menu from './components/menu';

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards/:category" element={<Cards />} />
      <Route path="/cart" element={<Cards />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App;
