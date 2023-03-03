import React from 'react'
import './Header.css'
import './index.css'
import { Routes, Route, Link } from 'react-router-dom';
import Main from './main';
import Reservations from './reservations';
import App from './App';
import About from './about';
import Orders from './orders';
import Menu from './menu';

const Header = () => {
  return (
    <header className='header'>
      <div className='headerlogo'>
        <button>
          <a href='Home'>
            <img src='./images/icons_assets/Logo.svg' height={50} alt='logo' />
          </a>
        </button>  
      </div>
      <nav>
          <ul className='mobilenav'>
            <button>
              <a href='mobileMenu'>
                <img src='.\images\icons_assets\🦆 icon _hamburger menu_.svg' alt='burger' />
              </a>
            </button>
          </ul>
        </nav>  
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
      </Routes>
    </header>
  )
}

export default Header
