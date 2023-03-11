import React from 'react'
import './Hero.css'
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
        <button className='btn content'><Link to='./reservations' onClick={(e) => {console.log("clicked!")}}>Make A Reservation</Link></button>
        </div>
        <img className='herofood' src='images\icons_assets\restaurant.jpg' height={400} width={325}/>
    </div>
  )
}

export default Hero
