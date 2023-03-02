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
          <li><a href='About'>about</a></li>
          <li><a href='Menu'>menu</a></li>
          <li><a href='reservations'>reservations</a></li>
          <li><a href='Order'>online orders</a></li>
          <li><a href='login'>login</a></li>
        </ul>
        <ul className='none'>
          <h1>Contact Us</h1>
          <li><a>Address</a></li>
          <li><a>phone number</a></li>
          <li><a>email</a></li>
        </ul>
        <ul className='none'>
          <h1>Social Media</h1>
          <li><a href='https://www.instagram.com'>instagram</a></li>
          <li><a href='https://www.facebook.com'>facebook</a></li>
          <li><a href='https:www.twitter.com'>twitter</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
