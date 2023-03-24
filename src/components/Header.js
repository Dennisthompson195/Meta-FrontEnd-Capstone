import React from 'react'
import '../styles/Header.css'
import '../styles/index.css'
import { Routes, Route, Link } from 'react-router-dom';
import Main from '../routes/Main';
import About from './About';
import Orders from '../routes/Orders';
import Menu from '../routes/Menu';
import MobileMenu from '../routes/MobileMenu';
import BookingPage from '../routes/BookingPage';


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
          <ul>
            <button className='mobilenavbtn'>
              <Link to='./MobileMenu'>
                <img src='.\images\icons_assets\🦆 icon _hamburger menu_.svg' alt='burger' />
              </Link>
            </button>
          </ul>
        </nav>  
      <nav className='nav'>
        <ul className='nav'>
          <li className='list'><Link to='/'>Home</Link></li>
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
        <Route path="/About" element={<About /> }/>
        <Route path="/Order" element={<Orders /> }/>
        <Route path="/Order" element={<Menu /> }/>
        <Route path="/MobileMenu" element={<MobileMenu /> }/>
      </Routes>
    </header>
  )
}

export default Header
