import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  // Retrieve the user info from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    // Clear user info from localStorage
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="absolute right-4 mt-2 w-[300px] bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">
          {user?.username?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h4 className="text-lg font-semibold">{user?.username || 'Guest'}</h4>
          <p className="text-sm text-gray-500">{user?.email || 'No email'}</p>
        </div>
      </div>
      <hr className="my-4" />
      <ul className="space-y-2">
        <li 
          onClick={handleLogout} 
          className="cursor-pointer hover:text-purple-600"
        >
          Logout
        </li>
        
      </ul>
    </div>
  );
};

export default Profile;


