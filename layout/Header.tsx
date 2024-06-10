import React from 'react'
import Link from 'next/link'
import { FaSearch, FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <span className="text-2xl font-bold text-gray-800">Estore.</span>
          </Link>
        </div>
        <ul className="flex space-x-8 text-gray-600">
          <li>
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" className="hover:text-gray-800">
              Categori
            </Link>
          </li>
          <li>
            <Link href="/latest" className="relative hover:text-gray-800">
              Latest
              <span className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded-full text-xs">
                HOT
              </span>
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-800">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-gray-800">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products"
              className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <FaHeart className="text-gray-600 hover:text-gray-800" />
          <FaShoppingCart className="text-gray-600 hover:text-gray-800" />
          <FaUserCircle className="text-gray-600 hover:text-gray-800" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header