import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Promotion from '../components/Promotion'

const Home = () => {

  return (
    <div>
        <Navbar/>
        <Promotion/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home