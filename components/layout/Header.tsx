"use client";
import { useAuth } from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import UserModal from "../common/model/UserModal";

const Header: React.FC = () => {
  const { signOut, user } = useAuth();
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/auth/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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
          <Link href="/cart" className="relative p-2">
            <FiShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute px-2 py-1 text-sm bg-red-400 text-white rounded-full -top-2 -right-3">{cart?.length}</span>
          </Link>
          {user ? (
            <div className="relative">
              <FaUserCircle size={32} className="text-gray-600 cursor-pointer" onClick={openModal} />
              <UserModal isOpen={isModalOpen} closeModal={closeModal} userEmail={user.email || 'N/A'} logout={handleLogout} />
            </div>
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
};

export default Header;
