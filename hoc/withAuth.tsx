"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
    const AuthComponent: React.FC<P> = (props) => {
        const router = useRouter();
        const { user } = useAuth();

        useEffect(() => {
            // Redirect to login page if user is not authenticated
            if (!user) {
                router.push('/auth/login');
            }
        }, [user, router]);

        return <WrappedComponent {...props} />;
    };

    return AuthComponent;
};

export default withAuth;
