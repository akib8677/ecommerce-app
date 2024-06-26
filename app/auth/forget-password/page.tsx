"use client";
import { useAuth } from "@/context/AuthContext";
import withAuth from "@/hoc/withAuth";
import { supabase } from "@/services/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent, useEffect } from "react";

function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { forgotPassword } = useAuth();
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

  const handlePasswordReset = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      await forgotPassword(email);
      setMessage("Check your email for the password reset link.");
    } catch (error) {
      setError("Error requesting password reset:");
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
          {loading ? "Submitting..." : "Submit"}
        </button>
        <div className="mt-4 text-center text-sm">
          Have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm
