import React, { useState } from "react";

const Login = (req, res) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setError(null);



    try {

      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });


      if(!response.ok){
        throw new Error()
      }
        
    } catch (error) {
        setError(error.message);
    }finally{
      setLoading(false);

    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="••••••••"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 active:scale-[0.98] shadow-lg shadow-indigo-500/30"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;