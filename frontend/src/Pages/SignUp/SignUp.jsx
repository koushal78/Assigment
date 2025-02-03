import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import { Link } from 'react-router-dom';
import UseSignUp from '../../hooks/UseSignUp';

const SignUp = () => {
  const [data ,setdata] = useState({
    fullname:"",
    username:"",
    password:"",
    confirmpassword:"",
    gender:"",
  })
  const{loading,Signup} = UseSignUp()

  const handleSignUp= async(e)=>{
    e.preventDefault();
    console.log(data)
    await Signup(data);

  }

  return (
    <div
    className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: "url('/assets/pexels-stywo-1054218.jpg')" }}
  >
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-opacity-50 pt-14">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-2xl">
          <h1 className='text-center text-2xl font-bold text-gray-800 mb-4'>Registration</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="fullname" className="text-gray-700">Full Name</label>
              <input type="text" id="fullname" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.fullname}

              onChange={(e)=>setdata({...data,fullname:e.target.value})}
              
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-gray-700">Username</label>
              <input type="text" id="username" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.username}
              onChange={(e)=>setdata({...data,username:e.target.value})}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700">Password</label>
              <input type="password" id="password" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.password}
              onChange={(e)=>setdata({...data,password:e.target.value})}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</label>
              <input type="password" id="confirmPassword" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.confirmpassword}
              onChange={(e)=>setdata({...data,confirmpassword:e.target.value})}
               />
            </div>
            <div className="flex flex-col">
              <p className='text-gray-700'>Gender</p>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="male" className="accent-blue-500"
                  checked={data.gender === "male"} 
                  onChange={(e)=>setdata({...data,gender:e.target.value})}
                  /> Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="female" className="accent-blue-500"
                  checked={data.gender === "female"} 
                   onChange={(e)=>setdata({...data,gender:e.target.value})}
                  /> Female
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="other" className="accent-blue-500"
                  checked={data.gender === "other"} 
                   onChange={(e)=>setdata({...data,gender:e.target.value})}
                  /> Other
                </label>
              </div>
            </div>
            <button onClick={handleSignUp} className='w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200'>Sign Up</button>
            <p className='text-slate-400 text-center  text-md'>Already have account <Link to='/auth/Login' className='text-blue-500 hover:border-b-2 hover:border-blue-400 hover:cursor-pointer '>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
