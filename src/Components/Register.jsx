import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { setUserData } from '../features/user/userSlice';
import { setUserData } from '../Redux/Slices/UserSlice';

const Register = () => {
    const [userData, setUserDataLocal] = useState({
        firstname: '',
        lastname: '',
        email: '',
        bio: '',
        phonenumber: '',
        password: '',
        confirmPass: '',
    });

    const dispatch = useDispatch();

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setUserDataLocal({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        dispatch(setUserData(userData)); // Dispatch action to set user data in Redux store
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex items-center justify-center py-5">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="First Name"
                            value={userData.firstname}
                            onChange={handleFieldChange}
                            name="firstname"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Last Name"
                            value={userData.lastname}
                            onChange={handleFieldChange}
                            name="lastname"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Bio</label>
                        <textarea
                            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Bio"
                            value={userData.bio}
                            onChange={handleFieldChange}
                            name="bio"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={userData.email}
                            onChange={handleFieldChange}
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Phone Number"
                            value={userData.phonenumber}
                            onChange={handleFieldChange}
                            name="phonenumber"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            value={userData.password}
                            onChange={handleFieldChange}
                            name="password"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm Password"
                            value={userData.confirmPass}
                            onChange={handleFieldChange}
                            name="confirmPass"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
