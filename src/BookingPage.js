import React from 'react'
import AboutTwo from './AboutTwo'
import About from './About'
import BookingForm from './BookingForm'
import Footer from './Footer'
import Header from './Header'
import Highlights from './Highlights'
import './Reservations.css'
import Confirmation from './Confirmation'
import Testimonials from './Testimonials'

const BookingPage = () => {
  return (
    <div className='formPage'>
    <Header />
    <BookingForm />
    <About />
    <Footer />
      
    </div>
  )
}

export default BookingPage
