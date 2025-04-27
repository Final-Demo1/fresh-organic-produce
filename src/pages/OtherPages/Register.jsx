import React, { useState } from "react";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!firstname || !lastname || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Check if email is already registered
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert("Email already registered!");
      return;
    }

    // Save user to localStorage
    const newUser = { firstname, lastname, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    // Clear form
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center justify-center mt-30 min-h-screen bg-gray-100">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Register
        </h2>
        <form className="mt-6" onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-green-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-green-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your email"
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
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-green-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Re-enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-500"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-800">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
