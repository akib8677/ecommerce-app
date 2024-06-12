"use client"
import { useAuth } from '@/context/AuthContext';
import React, { useState, FormEvent } from 'react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { forgotPassword } = useAuth();

  const handlePasswordReset = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      await forgotPassword(email);
      setMessage('Check your email for the password reset link.');
    } catch (error) {
      setError('Error requesting password reset: ');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handlePasswordReset}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        {error && <p className="text-red-700">{error}</p>}
        {message && <p className="text-green-700">{message}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-green-700 w-full rounded-md px-4 py-2 text-foreground mb-2"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
