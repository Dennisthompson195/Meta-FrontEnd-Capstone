import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footernav'>
        <div className='footerlogo'>
      <img src='./images/icons_assets/LittleLemon9.png' width={100} />
      </div>
        <div className='mobilefooterlogo'>
      <img src='./images/icons_assets/LittleLemon9.png' width={50} />
      </div>
        <ul className='none'>
          <h1>Navigation</h1>
          <li><a href='Home'>Home</a></li>
          <li><a href='About'>About</a></li>
          <li><a href='Menu'>Menu</a></li>
          <li><a href='reservations'>Reservations</a></li>
          <li><a href='Order'>Online Orders</a></li>
          <li><a href='login'>Login</a></li>
        </ul>
        <ul className='none'>
          <h1>Contact Us</h1>
          <li><a>Address</a></li>
          <li><a>Phone number</a></li>
          <li><a>Email</a></li>
        </ul>
        <ul className='none'>
          <h1>Social Media</h1>
          <li><a href='https://www.instagram.com'>Instagram</a></li>
          <li><a href='https://www.facebook.com'>Facebook</a></li>
          <li><a href='https:www.twitter.com'>Twitter</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
