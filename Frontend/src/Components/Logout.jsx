import React from 'react'
import { useAuth } from '../context/AuthProvider'


function Logout() {
    const [authUser,setAuthuser] = useAuth()
    const handleLogout =  () => {
        try{
            setAuthuser({

                ...authUser,
                user:null

            })
            localStorage.removeItem('Users')
            alert("Logout successfully")
            window.location.reload();
        }catch(err){
            alert("Error: " + err.message)
        }
    }

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
