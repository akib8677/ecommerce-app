import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl">
        <div
          className="hidden md:block md:w-1/2 bg-cover"
          style={{ backgroundImage: "url(/path/to/your/image.jpg)" }}
        >
          <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl font-bold">Welcome Back</h1>
              <p className="mt-2">
                Please log in using your personal information to stay connected
                with us.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
