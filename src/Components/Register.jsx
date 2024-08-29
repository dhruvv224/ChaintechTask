import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../Redux/Slices/UserSlice';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import React Icons
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [passwordVisible, setPasswordVisible] = useState(false);  // State to manage password visibility
  const [errors, setErrors] = useState({});  // State to manage form validation errors
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validate form data
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!userData.firstname) {
      tempErrors.firstname = 'First name is required';
      isValid = false;
    }

    if (!userData.lastname) {
      tempErrors.lastname = 'Last name is required';
      isValid = false;
    }

    if (!/^\d{10}$/.test(userData.phonenumber)) {
      tempErrors.phonenumber = 'Phone number must be 10 digits';
      isValid = false;
    }

    if (!userData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    }

    if (userData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (userData.password !== userData.confirmPass) {
      tempErrors.confirmPass = 'Passwords do not match';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle input field changes
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setUserDataLocal({
      ...userData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (!validate()) return; // Return if validation fails

    try {
      dispatch(setUserData(userData)); // Dispatch action to set user data in Redux store
      toast.success('Registration successful!');
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after a short delay
      }, 1000);
    } catch (error) {
      toast.error('Error registering, please try again.'); // Handle errors
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
            {errors.firstname && <div className="text-red-500">{errors.firstname}</div>}
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
            {errors.lastname && <div className="text-red-500">{errors.lastname}</div>}
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
            {errors.email && <div className="text-red-500">{errors.email}</div>}
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
            {errors.phonenumber && <div className="text-red-500">{errors.phonenumber}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="w-full p-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={userData.password}
                onChange={handleFieldChange}
                name="password"
              />
              {errors.password && <div className="text-red-500">{errors.password}</div>}
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
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
            {errors.confirmPass && <div className="text-red-500">{errors.confirmPass}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Already have an account? Login</Link>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Register;
