"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import withAuth from "@/hoc/withAuth";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await signIn(email, password);
      console.log(data);
      router.push("/");
    } catch (error) {
      setError("An error occurred during sign-in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        onSubmit={handleSignIn}
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
      >
        <h2 className="text-2xl text-center font-bold mb-2">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        {error && <p className=" text-red-600 mb-2">{error}</p>}
      </form>
      <div className="flex items-center justify-center">
        <Link
          href="/auth/forget-password"
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
      <p className="mt-2 text-sm text-center">
        Don't have an account?{" "}
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
