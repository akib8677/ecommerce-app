"use client"
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const { signOut, user } = useAuth();
  const router = useRouter()
  
  const handleLogout  = async () => {
    try {
      await signOut();
      router.push('/auth/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Ecommerce
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/product"
              className="text-gray-700 hover:text-gray-900"
            >
              Product
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products"
            className="hidden md:block px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <button className="relative p-2">
            <FiSearch className="w-6 h-6 text-gray-700" />
          </button>
          <button className="relative p-2">
            <FiShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
          </button>
          {user ? (
            <form action={handleLogout}>
              <button className="py-2 px-4 bg-red-500 text-white rounded-md">
                Logout
              </button>
            </form>
          ) : (
            <Link
              href="/auth/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
