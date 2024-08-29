import React, { useState } from 'react'

const Register = () => {
    const [UserData,setUserData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        bio:'',
        password:'',
        confirmPass:''

    })
    const handleFieldChange=(event)=>{
        const {name,value}=event.target
        setUserData({
            ...UserData,[name]:value
        })
    }
    console.log(UserData)
    const handleSubmit=()=>{
        console.log(UserData)
    }
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex items-center justify-center py-5">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder='First Name' value={UserData.firstname} onChange={handleFieldChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder='Last Name' value={UserData.lastname} onChange={handleFieldChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <textarea className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder='Bio Name' value={UserData.bio} onChange={handleFieldChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Email' value={UserData.email} onChange={handleFieldChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Password' value={UserData.password} onChange={handleFieldChange}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder='Confirm Password' value={UserData.confirmPass} onChange={handleFieldChange} />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register