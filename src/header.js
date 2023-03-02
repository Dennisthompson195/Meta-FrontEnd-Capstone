import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='headerlogo'>
      <img src='./images/icons_assets/Logo.svg' />
      </div>
      <nav className='nav'>
        <ul className='nav'>
          <li><a href='Home'>Home</a></li>
          <li><a href='About'>about</a></li>
          <li><a href='Menu'>menu</a></li>
          <li><a href='reservations'>reservations</a></li>
          <li><a href='Order'>online orders</a></li>
          <li><a href='login'>login</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
