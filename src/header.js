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
import MobileMenu from './MobileMenu';
import BookingPage from './BookingPage';
import Home from './Home';

const Header = () => {
  return (
    <header className='header'>
      <div className='headerlogo'>
        <button>
          <Link to='./Home'>
            <img src='./images/icons_assets/Logo.svg' height={50} alt='logo' />
          </Link>
        </button>  
      </div>
      <nav>
          <ul className='mobilenav'>
            <button>
              <Link to='./MobileMenu'>
                <img src='.\images\icons_assets\🦆 icon _hamburger menu_.svg' alt='burger' />
              </Link>
            </button>
          </ul>
        </nav>  
      <nav className='nav'>
        <ul className='nav'>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to ='/*Menu'>Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to='/*Order'>Online Orders</Link></li>
          <li><Link to="/*main">Login</Link></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/main" element={<Main />}/>
        <Route path="/reservations" element={<BookingPage />}/>
        <Route path="/Home" element={<Home /> }/>
        <Route path="/About" element={<About /> }/>
        <Route path="/Order" element={<Orders /> }/>
        <Route path="/Order" element={<Menu /> }/>
        <Route path="/MobileMenu" element={<MobileMenu /> }/>
      </Routes>
    </header>
  )
}

export default Header
