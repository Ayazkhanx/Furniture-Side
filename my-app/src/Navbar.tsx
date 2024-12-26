import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
// import logo from '../public/logo.png'; // assuming logo is in the public directory

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <div className="navbar-container hidden md:flex justify-between items-center p-6">
        <div className="flex items-center gap-1">
          {/* Logo with controlled height */}
          {/* <img src='logo.png' alt="Exclusive brand logo" className="h-8" />
          <h1 className="text-xl font-semibold">Exclusive</h1> */}
        </div>

        {/* Navbar links */}
        <div className="flex space-x-8">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </div>
        

        {/* Icons section */}
        <div className="flex gap-4">
          <CiUser className="cursor-pointer text-xl" />
          <FaSearch className="cursor-pointer text-xl" />
          <CiHeart className="cursor-pointer text-xl" />
          <FiShoppingCart className="cursor-pointer text-xl" />
        </div>
      </div>

      {/* Navbar for small screens (Mobile version) */}
      <div className="md:hidden flex justify-between items-center p-6">
        {/* Mobile logo */}
        <div className="flex items-center gap-1">
          {/* <img src='logo.png' alt="Exclusive brand logo" className="h-8" />
          <h1 className="text-xl font-semibold">Exclusive</h1> */}
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="text-xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 bg-white shadow-md">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </div>
  
      )}

      {/* Icons section for small screens */}
      <div className="md:hidden flex justify-between p-4 bg-white shadow-md">
        <div className="flex gap-4">
          <CiUser className="cursor-pointer text-xl" />
          <FaSearch className="cursor-pointer text-xl" />
          <CiHeart className="cursor-pointer text-xl" />
          <FiShoppingCart className="cursor-pointer text-xl" />
        </div>
      </div>

      <hr />
    </>
  );
}
