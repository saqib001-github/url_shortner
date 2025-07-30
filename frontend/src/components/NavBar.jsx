import React from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                LinkShrink
              </span>
            </Link>
          </div>
          
          {/* User Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Welcome, {user?.name || 'User'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                  </svg>
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                </svg>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
