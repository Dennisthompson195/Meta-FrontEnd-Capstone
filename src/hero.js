import React from 'react'
import './Hero.css'


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
        <button className='btn content'><a href='./reservations'>Make A Reservation</a></button>
        </div>
        <img className='herofood' src='images\icons_assets\restaurant.jpg' height={400} width={325}/>
    </div>
  )
}

export default Hero
