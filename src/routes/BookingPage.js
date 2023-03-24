import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/Reservations.css'
import ReservationsContent from './ReservationsContent'


const BookingPage = () => {
  return (
    <div className='formPage'>
    <Header />
    {/*<BookingForm />*/}
    <ReservationsContent />
    <div className='bookFooter'>
    <Footer />
    </div>
      
    </div>
  )
}

export default BookingPage
