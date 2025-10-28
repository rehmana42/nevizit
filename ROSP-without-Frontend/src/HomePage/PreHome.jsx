import { useState } from "react";
import Signup from "./Authentication/MainSignup";
import Login from "./Authentication/MainLogin";
import Home from "./Home";

function PreHome() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignup = () => {
    setIsSignedUp(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <>
          {!isSignedUp ? (
            <Signup onSignup={handleSignup} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </>
      ) : (
        <Home/>
      )}
    </div>
  );
}

export default PreHome;

