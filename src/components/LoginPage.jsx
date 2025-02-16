import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    if (username === "Khushi" && password === "admin") {
      // Save the logged-in user in localStorage or state
      localStorage.setItem("user", "Khushi");
      navigate("/dashboard"); // Redirect to Dashboard after successful login
    } else {
      setError("Invalid username or password");
    }
  };

  const handleNotUserClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleNotUserClick}
          className="mt-4 w-full bg-gray-100 border border-2 border-gray-400 text-gray-700 py-2 rounded-lg hover:bg-gray-300 hover:bg-red-500 hover:text-white hover:border-gray-500"
        >
          Not an admin? Go back to Home
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
