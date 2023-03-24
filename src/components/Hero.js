import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
        <p>
            We are a family owned
            Mediterranean restaurant,<br/>
            focused on traditional<br/> 
            recipes served with a modern<br/>
            twist .
        </p>
        <button className='book btn content'><Link to='./reservations'>Make A Reservation</Link></button>
        </div>
        <img className='herofood' src='images\icons_assets\restaurant.jpg' height={550} width={475}/>
    </div>
  )
}

export default Hero
