import React, { useState } from "react";

const Auth = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username) {
      localStorage.setItem("user", username);
      setUser(username);
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
