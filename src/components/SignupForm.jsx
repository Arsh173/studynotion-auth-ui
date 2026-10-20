import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "", lastName: "",
        email: "", password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType]=useState("student");

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
         event.preventDefault();
         if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
         }

         setIsLoggedIn(true);
         toast.success("Account Created")
         const accountData={
            ...formData
         };

         const finalData = {
            ...accountData,
            accountType
         }
         console.log("printing Final account data");
         console.log(finalData);

         navigate("/dashboard");

         
    }
    return (
        <div>
            {/* student-Instructor tab */}
            <div 
            className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                className={`${accountType === "student"
                    ?
                    "bg-slate-900 text-slate-300" :
                    "bg-transparent text-slate-200"}
                    py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button
                 className={`${accountType === "instructor"
                    ?
                    "bg-slate-900 text-slate-100" :
                    "bg-transparent text-slate-200"}
                    py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* first Name and Last Name */}
                <div className='w-full mt-[20px] gap-2 flex justify-between'>
                    <label className='w-full'>
                    <p className='text-[0.875rem] text-slate-600 ml-1 leading-[1.375rem]'>First Name<sup className='text-pink-800'>*</sup></p>
                    <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className='bg-slate-800 rounded-[0.3rem] text-slate-600 w-full p-[12x]'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-slate-600 ml-1 leading-[1.375rem]'>Last Name<sup className='text-pink-800'>*</sup></p>
                    <input
                    required
                    type = "text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    className='bg-slate-800 rounded-[0.3rem] text-slate-600 w-full p-[12x]'
                    />
                </label>
                </div>
                  {/* email address */}
                <div className='mt-[20px]'>
                   <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-slate-600 ml-1 leading-[1.375rem]'>Email Address<sup className='text-pink-800'>*</sup></p>
                    <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address"
                    value={formData.email}
                    className='bg-slate-800 rounded-[0.3rem] text-slate-600 w-full p-[12x]'
                    />
                </label>
                </div>

                {/* createPassword and confirm Password */}
                <div className='w-full gap-2 mt-[20px] flex justify-between'>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-slate-600 ml-1 leading-[1.375rem]'>Create Password<sup className='text-pink-800'>*</sup></p>
                        <input
                        type={showPassword ? ("text"): ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-slate-800 rounded-[0.3rem] text-slate-600 w-full p-[12x]'
                        />
                        <span className='absolute right-1 top-[24px] cursor-pointer'
                        
                        onClick={() => setShowPassword((prev) => !prev)}>
                              {showPassword ? 
                              (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) :
                               (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) }
                        </span>
                    </label>

                    <label className='relative'>
                        <p className='text-[0.875rem] text-slate-600 ml-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-800'>*</sup></p>
                        <input
                        type={showConfirmPassword ? ("text"): ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-slate-800 rounded-[0.3rem] text-slate-600 w-full p-[12x]'
                        />
                        <span  className='absolute right-1 top-[24px] cursor-pointer'
                        
                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                              {showConfirmPassword ?
                               (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) :
                                (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>) }
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
            </form>

        </div>
    )
}

export default SignupForm