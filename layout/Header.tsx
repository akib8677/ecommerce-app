import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const Header = () => {


  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center" style={{padding: '15px'}}>
        <div className="text-lg font-bold">My Website</div>
        <ul className="flex space-x-4" style={{gap:'10px'}}>
          <li>
            <Link href="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-200">Product</Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-200">Login</Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-gray-200">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
