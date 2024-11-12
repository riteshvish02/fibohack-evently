import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import {isUser,createUser} from "../store/actions/user"
import { useDispatch, useSelector } from 'react-redux';
import {clearError,clearMsg,clearMsgAuth,clearErrorAuth} from "../store/reducers/userSlice"


const UserRegister = () => {
  const user = useSelector(state=>state.User)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    profilePicture: '',
    city:'bhopal',
    contact:''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
    // Check if all fields are filled
    if(
      formData.city !== "" && 
      formData.email !== "" &&  
      formData.password !== "" &&
      formData.firstname !== "" &&
      formData.lastname !== "" &&
      formData.contact !== "" &&
      formData.username !== "" 
    ){
      // Individual field validations
      if (formData.firstname.length < 3) {
        return toast.error("First name must contain at least 3 characters");
      }
      if (formData.lastname.length < 4) {
        return toast.error("Last name must contain at least 4 characters");
      }
      if (!formData.password.match(passwordRegex)) {
        return toast.error(
          "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number"
        );
      }
      if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        return toast.error("Please enter a valid email");
      }
      
      // Dispatch createUser action if all validations pass
      dispatch(createUser(formData));
      
    } else {
      // Check for specific empty fields
      if (formData.city === "") {
        toast.error("Please select a city");
      }
      if (formData.email === "") {
        toast.error("Please enter a valid email");
      }
      if (formData.password === "") {
        toast.error("Password is required");
      }
      if (formData.firstname === "") {
        toast.error("First name is required");
      }
      if (formData.lastname === "") {
        toast.error("Last name is required");
      }
      if (formData.contact === "") {
        toast.error("Contact is required");
      }
      if (formData.username === "") {
        toast.error("Username is required");
      }
    }
  };
  

  useEffect(()=>{
    if(user.messageAuth){
      toast.success("user created successfully");
      dispatch(clearMsgAuth())
    }
    if(user.isAuthenticated){
      toast.success("user logged in successfully");
    }
    if(user.errorAuth){
      toast.error(user.errorAuth);
      dispatch(clearErrorAuth())
    }
    if(!user.loading){
      if(user.isAuthenticated){
        dispatch(isUser())
        navigate('/events');
      }else{
        navigate('/createaccount');
      }
    }
  },[user.messageAuth,user.errorAuth,dispatch])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-[ppbold] font-bold text-center text-gray-700 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]"
            />
            <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters</p>
          </div>

          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              placeholder="Enter your last name"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-600">contact</label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-600">Profile Picture URL</label>
            <input
              type="url"
              id="profilePicture"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              placeholder="Enter profile picture URL (optional)"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">city</label>
            <select name="city" id="" className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]" value={formData.city || ""} onChange={handleChange}>
            <option value="bhopal">bhopal</option>  
            <option value="raisen">raisen</option>  
            </select>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 px-4 text-white rounded-lg font-semibold bg-gradient-to-r from-[#9a7bf0] to-[#8b62fc] hover:from-[#8b62fc] hover:to-[#703dfd] transition-colors duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to='/login' className="text-[#8154fc] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
