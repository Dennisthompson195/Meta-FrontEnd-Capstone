import React from 'react'

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
        <button className='btn hero'><a href='./reservations'>Make A Reservation</a></button>
        </div>
        <img className='herofood' src='images\icons_assets\restauranfood.jpg' height={325} width={375}/>
    </div>
  )
}

export default Hero
