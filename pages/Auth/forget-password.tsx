"use client";


import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleForgotPassword = () => {
    // Handle forgot password action
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center flex-1 text-center">
          <h2 className="text-2xl font-bold mb-4">Forgot Your Password?</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className={`px-6 py-2 w-full text-white bg-blue-600 rounded-lg hover:bg-blue-900 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </div>
          </form>
          <p className="mt-2 text-sm text-center">
            Remember your password?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
      </main>
    </div>
  );
}
