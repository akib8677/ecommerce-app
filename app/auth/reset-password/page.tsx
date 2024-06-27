"use client"
import React, { useState, FormEvent, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import withAuth from '@/hoc/withAuth';
import { supabase } from '@/services/supabaseClient';
import { useRouter } from 'next/navigation';

 function ResetPasswordForm() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const { updatePassword } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error.message);
        return;
      }
      if (data.session) {
        router.replace('/');
      }
    };
    checkUser();
  }, []);

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      await updatePassword(password);
      setMessage('Password updated successfully!');
    } catch (error) {
      setError('Error updating password');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          {loading ? 'Resetting Password...' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
}

export default withAuth(ResetPasswordForm);
