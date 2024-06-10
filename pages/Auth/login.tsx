"use client";

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateField = (field:any, value:any) => {
    switch (field) {
      case 'email':
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(value);
      case 'password':
        return value.length >= 4;
      default:
        return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateField('email', email)) {
      setError('Invalid email address');
      return;
    }
    if (!validateField('password', password)) {
      setError('Password must be at least 4 characters long');
      return;
    }

    try {
      setIsLoading(true);
      await login(email, password);
      router.push('/');
    } catch (err) {
      setError("Failed to login. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Logic for handling forgot password can be implemented here
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="flex items-center justify-between mb-2">
          <button
            type="submit"
            className="px-6 py-2 w-full text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <button
          onClick={handleForgotPassword}
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>
      <p className="mt-2 text-sm text-center">
        Don't have an account?{" "}
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
