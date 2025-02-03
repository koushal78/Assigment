import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import { Link } from 'react-router-dom';
import UseLogin from '../../hooks/useLogin';


const Login = () => {
  
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const{ loading, Login} = UseLogin()

  console.log(data)
  const handleLogin = async(e) => {
    e.preventDefault();
    await Login(data)
  
  };

  return (
<div
  className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/assets/pexels-stywo-1054218.jpg')" }}
>      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-opacity-50 pt-14">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-2xl">
          <h1 className='text-center text-2xl font-bold text-gray-800 mb-4'>Login</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="text-gray-700">Username</label>
              <input 
                type="text" 
                id="username" 
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                value={data.username} 
                onChange={(e) => setData({ ...data, username: e.target.value })} 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700">Password</label>
              <input 
                type="password" 
                id="password" 
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                value={data.password} 
                onChange={(e) => setData({ ...data, password: e.target.value })} 
              />
            </div>
            <button 
              className='w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200' 
              onClick={handleLogin}
            >
              Login
            </button>
            <p className='text-slate-400 text-center text-md'>
              Don't have an account? 
              <Link to='/auth/SignUp' className='text-blue-500 hover:border-b-2 hover:border-blue-400 hover:cursor-pointer' >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
