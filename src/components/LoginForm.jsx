import React from 'react' 
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }
        ));
    }

    function submitHandler(event) {
        event.preventDefault();

        console.log("Login clicked");

        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard");

    }
    return (
       <form onSubmit={submitHandler}
       className='flex flex-col w-full gap-y-4 mt-4'> 
          
          
          <label className='w-full'>
            <p className='text-[0.875rem] text-slate-600 ml-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-800'>*</sup>
            </p>
            <input
            required
            type ="email"
            value = {formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            name="email"
            className='bg-slate-800 rounded-[0.3rem] text-slate-600 w-full p-[12x]'
            />
          </label>

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-slate-600 ml-1 leading-[1.375rem]'>
                Password<sup className='text-pink-800'>*</sup>
            </p>
            <input
            required
            type = {showPassword ? ("text") : ("password")}
            value = {formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password"
            className='bg-slate-800 rounded-[0.3rem] text-slate-600 w-full p-[12x]'
            />

            <span className='absolute right-1 top-[24px] cursor-pointer'
             onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ?
                
                (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) :
                 (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) }
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-300 max-w-max ml-auto'>
                    Forget Password
                </p>
            </Link>
          </label>

          <button className='bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6'>
               Sign In
          </button>
       </form>
    )
}

export default LoginForm