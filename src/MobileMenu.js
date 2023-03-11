import React from 'react'
import './Header.css'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Reservations from './BookingForm';
import App from './App';
import About from './About';
import Orders from './Orders';
import Menu from './Menu';

const MobileMenu = () => {
  return (
    <div>
      <h1>MobileMenu</h1>
      <nav className='nav'>
        <ul className='nav'>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to ='/Menu'>Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><a href='Order'>Online Orders</a></li>
          <li><Link to="/main">Login</Link></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/main" element={<Main />}/>
        <Route path="/reservations" element={<Reservations />}/>
        <Route path="/Home" element={<App /> }/>
        <Route path="/About" element={<About /> }/>
        <Route path="/Order" element={<Orders /> }/>
        <Route path="/Order" element={<Menu /> }/>
        <Route path="/MobileMenu" element={<MobileMenu /> }/>
      </Routes>
    </div>
  )
}

export default MobileMenu
