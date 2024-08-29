import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserData, clearUserData } from '../Redux/Slices/UserSlice'; // Import the necessary actions

const UserPage = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState(userData.firstname || '');
  const [lastname, setLastname] = useState(userData.lastname || '');
  const [bio, setBio] = useState(userData.bio || '');
  const [phonenumber, setPhonenumber] = useState(userData.phonenumber || '');
  const [email, setEmail] = useState(userData.email || '');
  const [password, setPassword] = useState(userData.password || '');

  const handleSave = () => {
    dispatch(updateUserData({ firstname, lastname, bio, phonenumber, email, password }));
    alert('User data updated successfully!');
    navigate('/user')
  };

  const handleLogout = () => {
    dispatch(clearUserData());
    navigate('/');
  };

  if (!userData.email) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome, {firstname} {lastname}
        </h2>
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstname"
            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phonenumber" className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phonenumber"
            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-700">Bio</label>
          <textarea
            id="bio"
            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Save Changes
        </button>
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPage;
