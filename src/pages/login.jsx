import { useState } from 'react'
import logo from '../assets/images/logo/Rentify-Logo.png'
import Login from '../components/Authorize/login'
import Signup from '../components/Authorize/signup'
import { post } from '../services/apiHandler'

export default function Authorize() {
    const [login,setLogin]=useState(false)
    const [data,setData]=useState({})
    const handleSubmit=async()=>{
       const responce=await post('/api/auth/signup')
    }
    return <>
        <div className="flex h-screen">

            <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                <div className="max-w-md text-center">

                    <img src={logo} className='animate-bounce duration-1000' alt="logo" />
                </div>
            </div>

            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full flex flex-col gap-y-10 p-6">
            {login?<Login/>: <Signup login={login} setLogin={setLogin}/>}
             <div>
    {/* <button type="button" onClick={handleSubmit} className="w-full bg-black text-white p-2 mt-5 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button> */}
</div>
             <div className="mt-4  text-sm text-gray-600 text-center">
    <p>{login?"Don't have Account":"Already have an account?"} <span onClick={()=>setLogin(!login)} className="text-black cursor-pointer ">{login?"Signup here":"Login here"}</span>
    </p>
    
    </div>
</div>
            </div>
        </div>
    </>
}