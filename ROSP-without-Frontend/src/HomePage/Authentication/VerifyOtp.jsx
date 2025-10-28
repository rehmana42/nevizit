import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if location.state exists
  const { email, username, password,category } = location.state || {}; // Use optional chaining

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Redirect if location.state is null
    if (!email || !username || !password) {
      navigate('/signup'); // Redirect to the signup page or wherever appropriate
    }
  }, [email, username, password, navigate]);

  const handleVerify = async () => {
    try {
      const response = await fetch('http://localhost:3004/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, username, password ,category}), // Include username and password
      });

      if (response.ok) {
        alert("Verification successful! You can now log in.");
        navigate('/'); // Redirect to login
      } else {
        const message = await response.text();
        setError(message);
      }
    } catch (error) {
      console.error("Verification failed:", error);
      setError("Verification failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-white">
      <div className="w-full max-w-md space-y-8 bg-gray-900 p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold text-white">Enter OTP</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleVerify}
            className="w-full py-2 mt-6 bg-orange-500 hover:bg-orange-600 rounded-md text-white font-bold"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
