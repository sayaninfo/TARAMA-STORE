import React from 'react'
import Navbar from './Navbar'

function Contacts() {
  return (
    <>
    <Navbar/>
    <div>
      <div className="hero bg-base-200 min-h-screen" style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/friends-shopping-second-hand-market_23-2149353695.jpg?t=st=1725809990~exp=1725813590~hmac=09a65272f617fb24fbf6fed7bae9d9e694994dc018652183018ba805da8bcae1&w=996)",
  }}>
  <div className="hero-content flex-col lg:flex-row">

    <div className='text-center'>
      <h1 className="text-7xl font-bold text-slate-50">Contact Details</h1>
      <p className=" text-2xl py-6 text-red-200">
        We are Here for You!!!
        </p>
      <div className=" text-2xl py-6 text-yellow-200">

        <p> Call Us : +91 9831384453 or  +91 8335898206 </p>
        <p> Email Us :  taramastore@gmail.com </p>
        <p> Address :  Swarupnagar, lane 1, Dankuni, West Bengal 712311 </p>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Contacts
