import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]); // Store selected categories
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const categoriesList = [
    "Adventure and Thrill Park",
    "Museum and Art Gallery",
    "Mountain and Hiking Destinations",
    "Wildlife Reserves & Sanctuaries",
    "Sports and Recreation Grounds",
    "Historical and Heritage Sites",
    "Religious and Cultural Sites",
  ];

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation checks
  const validateForm = () => {
    let formErrors = {};
    if (!username) formErrors.username = "Username is required";
    if (!email || !emailRegex.test(email)) formErrors.email = "A valid email is required";
    if (!password || password.length < 6) formErrors.password = "Password should be at least 6 characters";
    if (selectedCategories.length === 0) formErrors.categories = "Please select at least one category";

    return formErrors;
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // const handleSignup = async () => {
  //   const formErrors = validateForm();
  //   if (Object.keys(formErrors).length > 0) {
  //     setErrors(formErrors);
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:3004/api/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, email, password, categories: selectedCategories }),
  //     });

  //     if (response.ok) {
  //       alert("Signup successful!");
  //       navigate("/verify", { state: { email, username, password, categories: selectedCategories } });
  //     } else {
  //       const errorMessage = await response.text();
  //       alert(`Signup failed: ${errorMessage}`);
  //     }
  //   } catch (error) {
  //     console.error("Error during signup:", error);
  //     alert("Signup failed!");
  //   }
  // };
  const handleSignup = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    const requestData = {
      username,
      email,
      password,
      category:selectedCategories,
    };
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      const data = await response.text();
      if (response.ok) {
        alert("Signup successful! OTP sent.");
        navigate("/verify", { state: { email, username, password, category:selectedCategories} });
      } else {
        alert(`Signup failed: ${data}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed due to a network error.");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-white">
      <div className="w-full max-w-md space-y-8 bg-gray-900 p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold text-white">Create an account</h2>
        <div className="space-y-4">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <div className="mt-4">
            <h3 className="text-lg text-white">Select Categories:</h3>
            {categoriesList.map((category, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" value={category} checked={selectedCategories.includes(category)} onChange={() => handleCategoryChange(category)} />
                <span>{category}</span>
              </label>
            ))}
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>

          <button onClick={handleSignup} className="w-full py-2 mt-6 bg-orange-500 hover:bg-orange-600 rounded-md text-white font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSignup;
