import React from 'react'
import { Await, Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios  from "axios"



function Signup(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    alert("Signup successfully")
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))

            }).catch((err) => {
               if(err.response){
                console.log(err)
                alert("Error: " + err.response.data.message)
               }
            })
    };
  return (
  <>
  <div className="flex h-screen items-center justify-center">
            <div id="my_modal_3">
                <div className="modal-box dark:bg-slate-800 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    
                    { /*log in*/}
                    <h3 className="font-bold text-lg">Signup</h3>
                    <div className='mt-4 space-y-2'>
                    <span>Name</span>
                        <br />
                        <input type="Name"
                            placeholder="Enter your Name"
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("fullname", { required: true })}
                            

                        />
                        <br/>
                        {errors.fullName && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>


                    <span>Email</span>
                        <br />
                        <input type="email"
                            placeholder="Enter your email"
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })}
                        />
                        <br/>
                        {errors.Email && <span className="text-red-500">This field is required</span>}
                    </div>
                    { /*Password*/}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type="Password"
                            placeholder="Enter your Password"
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("password", { required: true })}

                        />
                        <br/>
                        {errors.Password && <span className="text-red-500">This field is required</span>}


                    </div>
                    { /*Button*/}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                            Signup </button>
                        <p>
                            Not registered?{" "}
                            <Link to="/" className='underline text-blue-500 cursor-pointer'
                            onClick={() => document.getElementById('my_model_3').showmodel()}>
                                Login
                            </Link>{""}
                        </p>
                    </div>

                </form>
                </div>
            </div>
            </div>
        
  </>
  )
}

export default Signup
