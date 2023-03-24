import React from 'react'
import '../styles/Header.css'
import '../styles/index.css'
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Reservations from '../components/BookingForm';
import App from '../App';
import About from '../components/About';
import Orders from './Orders';
import Menu from './Menu';

const MobileMenu = () => {
  return (
    <>
      <div className='mobileHeader'>
        <button className='mobileHeaderLogo'>
          <Link to='./Home'>
            <img src='./images/icons_assets/Logo.svg' height={50} alt='logo' />
          </Link>
        </button>  
      </div>
      <h1 className='hidden'>mobile content is hidden on widescreens</h1>
      <p className=' hidden fourOFour'>
        <Link className="link" to="/">Go back to the home page</Link>
      </p>
      <nav className='mobilenav'>
        <ul>
          <li className='listItem'><Link to='/Home'>Home</Link></li>
          <li className='listItem'><Link to='/About'>About</Link></li>
          <li className='listItem'><Link to ='/Menu'>Menu</Link></li>
          <li className='listItem'><Link to="/reservations">Reservations</Link></li>
          <li className='listItem'><a href='Order'>Online Orders</a></li>
          <li className='listItem'><Link to="/main">Login</Link></li>
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
    </>
  )
}

export default MobileMenu
