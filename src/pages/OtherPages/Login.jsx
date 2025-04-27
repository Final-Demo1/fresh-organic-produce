import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth(); // Correct destructuring
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find a user that matches the username/email and password
    const validUser = users.find(
      (user) =>
        (user.email === usernameOrEmail || user.firstname === usernameOrEmail) &&
        user.password === password
    );

    if (validUser) {
      alert(`Welcome back, ${validUser.firstname}!`);
      login(); // Log the user in by updating the AuthContext
      navigate('/payment'); // Redirect to the payment page
    } else {
      alert("Invalid username/email or password.");
    }

    // Clear form fields
    setUsernameOrEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 text-center">Login</h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-green-700"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your username or email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-green-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-800">
          Don't have an account?{" "}
          <a href="/register" className="text-green-700 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
