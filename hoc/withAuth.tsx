"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/services/supabaseClient";

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
      const checkSession = async () => {
        const { data: session } = await supabase.auth.getSession();
        // Redirect to login page if user is not authenticated
        if (!session.session?.user) {
          router.push("/auth/login");
        }else {
          router.push("/");
        }

      };
      checkSession();
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
