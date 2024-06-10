import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const supabase = createClient();

  //   const {
  //     data: { session },
  //   } = await supabase.auth.getSession();

  //   if (session) {
  //     return redirect('/');
  //   }

  const resetPassword = async (formData: FormData) => {
    "use server";

    const password = formData.get("password") as string;
    const supabase = createClient();

    if (searchParams.code) {
      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
      );

      if (error) {
        return redirect(
          `/reset-password?message=Unable to reset Password. Link expired!`
        );
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.log(error);
      return redirect(
        `/reset-password?message=Unable to reset Password. Try again!`
      );
    }

    redirect(
      `/login?message=Your Password has been reset successfully. Sign in.`
    );
  };

  return (
    <div>
      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          action={resetPassword}
        >
          <h2 className="text-2xl text-center font-bold mb-4">
            Reset Password
          </h2>
          <label className="text-md" htmlFor="password">
            New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="password">
            Confirm New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
            Reset
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}