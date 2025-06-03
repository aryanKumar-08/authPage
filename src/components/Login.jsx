import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-pink-300">
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-purple-800 mb-2 text-center">Welcome Back!</h1>
        <p className="text-center text-sm text-gray-700 mb-6">Login to continue to your PopX dashboard</p>

        <form>
          <label className="block text-purple-800 font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mb-4 px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <label className="block text-purple-800 font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mb-6 px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
