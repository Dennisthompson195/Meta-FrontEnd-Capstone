import React from 'react'
import '../styles/Highlights.css'

const Highlights = () => {
  return (
    <div className='highlights'>
      <h1>This Weeks Specials!</h1>
      <button className='btnTwo'><a href='./order'>Order Online</a></button>
      <div className='sectionH'>
      <div className='card'>
        <img className='highlightsImages' src='.\images\icons_assets\greek salad.jpg' width={332} height={209} />
        <h1>Greek Salad</h1>
        <h2>$8.99</h2>
        <p>
          The famous greek salad of<br/>
          crispy lettuce, peppers, olives<br/>
          and our Chicago style feta cheese, 
          garnished with<br/> crunchy garlic and rosemary croutons.
        </p>
        <button className='ordersB'><a href='./orders'>Order Online<img className='delivery' src='.\images\icons_assets\Dish icon.svg' width={20} /></a></button>
      </div>
      <div className='card'>
        <img className='highlightsImages'  src='.\images\icons_assets\bruchetta.svg' width={332} height={209} />
        <h1 className='highlightsBrusch'>Bruschetta</h1>
        <h2 className='highlightsBrusch'>$8.99</h2>
        <p>
          Our Bruschetta is made from 
          grilled bread that has been 
          smeared with garlic and<br/>
          seasoned with salt and olive oil. 
        </p>
        <button className='ordersT'><a href='./orders'>Order Online<img className='delivery' src='.\images\icons_assets\Dish icon.svg' width={20} /></a></button>
      </div>
      <div className='card'>
        <img className='highlightsImages' src='.\images\icons_assets\lemon dessert.jpg' width={332} height={209} />
        <h1 className='lmcoT'>Lemoncello Cake</h1>
        <h2 className='lmco'>$8.99</h2>
        <p>
        This comes straight from grandma’s 
        recipe book,<br/> every last ingredient
        has been<br/> locally sourced and
         is as<br/> authentic as can be imagined.
        </p>
        <button className='orders'><a href='./orders'>Order Online<img className='delivery' src='.\images\icons_assets\Dish icon.svg' width={20} /></a></button>
      </div>
      </div>
    </div>
  )
}

export default Highlights
