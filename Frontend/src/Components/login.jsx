import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios  from "axios"
function login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    alert("Login successfully")
                    
                        window.location.reload();
                     
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))

            }).catch((err) => {
               if(err.response){
                console.log(err)
                alert("Error: " + err.response.data.message)
               }
            })
    }


    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-800 dark:text-white" >
                    <form onSubmit={handleSubmit(onSubmit)}method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/signup' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                  
                    { /*log in*/}
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="Email"
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
                        <input type="password"
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
                            Login </button>
                        <p>
                            Not registered?{" "}
                            <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                                Signup
                            </Link>{""}
                        </p>
                        
                    </div>
                    </form>

                </div>
            </dialog>
        </div>
    )
}

export default login
