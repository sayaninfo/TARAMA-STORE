import React from 'react'
import Home from './Home/Home'
import Men from './Components/Product'
import{Navigate, Route ,Routes}from "react-router-dom"
import Products from './Product/Products'
import Signup from './Components/Signup'
import Contacts from './Components/Contacts'
import About from './Components/About'
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser,setAuthuser] = useAuth()
  console.log(authUser)

  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={authUser?<Products/>:<Navigate to="/signup"/>}/>

      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
      <Route path="/About" element={<About/>}/>
      
    </Routes>
  
    </>
  )
}

export default App
