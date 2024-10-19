import React from 'react'
import Navbar from '../Components/Navbar'
import Product from '../Components/Product'
import Footer from '../Components/Footer'


function Products() {
 
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Product/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Products

