import React from 'react'
import { Link } from 'react-router-dom'
const WelcomePage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex flex-col justify-center items-center">
      <div className="text-center text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Account Manager</h1>
        <p className="text-lg md:text-xl mb-8">
          Create, manage, and secure your accounts with ease.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login">
            <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage