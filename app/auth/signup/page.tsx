import Link from 'next/link';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { SubmitButton } from '@/components/submit-button';

export default function SignupPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      const errorMessage = encodeURIComponent(error.message); // Encode the error message
      return redirect(`/signup?message=${errorMessage}`);
    }

    return redirect(
      `/confirm?message=Check email(${email}) to continue sign in process`
    );
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">Sign Up</h2>
      <form action={signUp}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            required
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {decodeURIComponent(searchParams.message)} {/* Decode the message */}
          </p>
        )}
        <SubmitButton
          formAction={signUp}
          className="bg-green-700 w-full rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-blue-600 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}
