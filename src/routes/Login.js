import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState } from 'react'


const Login = () => {
  const [path, setPath] = useState(false);
  const handleClick = async (e) => {
    setPath(true);
  return (
    <>
        {path ? ( <h1>HELLO</h1>
        ) : (
          <>
          <p>Hello login</p>
        <button onSubmit={handleClick}><p>click me</p></button>
           </>
           ) }

        </>
        )
  }
}  

export default Login
