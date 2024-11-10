'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters';
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      
      // Simulate API call (replace this with actual signup logic)
      setTimeout(() => {
        alert('Account created successfully!');
        setIsSubmitting(false);
      }, 2000);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-[ppbold] font-bold mb-2">Login Account</h1>
          <p className="text-gray-600 mb-8">Start your 30-day free trial</p>

          <button
            className="w-full mb-8 flex items-center justify-center gap-2 border rounded-lg p-3 hover:bg-gray-50 transition-colors"
            onClick={() => alert('Google sign-up functionality will go here')}
          >
            <img
              src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' fill='%234285F4'/%3E%3Cpath d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' fill='%2334A853'/%3E%3Cpath d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' fill='%23FBBC05'/%3E%3Cpath d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' fill='%23EA4335'/%3E%3C/svg%3E"
              alt="Google"
              className="w-6 h-6"
            />
            Sign up with Google
          </button>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What shall we call you?"
                className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full p-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#9a7bf0]`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              <p className="mt-2 text-sm text-gray-500">Must be at least 8 characters</p>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-[#9a7bf0] to-[#8b62fc] rounded-lg p-3 hover:from-[#8b62fc] hover:to-[#703dfd] transition-colors duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to='/createaccount' className="text-[#8b62fc] hover:underline">
              Register
            </Link>
          </p>
        </div>

        <div className="mt-auto pt-8 flex items-center justify-between text-sm text-gray-500">
          <p>© 2024 FissionX</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <div className="w-12 h-12 bg-white rounded-full mb-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#1abcfe">
              <path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
              <path d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              <path d="M4 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
              <path d="M12 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-[ppbold] font-semibold mb-4">FissionX</h2>
          <p className="text-lg text-gray-600">
            Sign up today to unlock all the features. Let's get you started on your new journey with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
