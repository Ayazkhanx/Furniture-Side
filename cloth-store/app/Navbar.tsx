"use client";
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <div className='hidden md:flex justify-evenly items-center p-6 bg-white shadow-md'>
        <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>

        {/* Desktop Links */}
        <div className='flex gap-8'>
          <Link href='/shirt' className="hover:text-gray-600">Shop</Link>
          <Link href='/sale' className="hover:text-gray-600">Sale</Link>
          <Link href='/newArrivals' className="hover:text-gray-600">New Arrivals</Link>
          <Link href='/brands' className="hover:text-gray-600">Brands</Link>
        </div>

        {/* Icons section for desktop */}
        <div className="flex gap-6">
          
          <FaSearch className="cursor-pointer text-xl" />
          <FiShoppingCart className="cursor-pointer text-xl" />
          <CiUser className="cursor-pointer text-xl" />
        </div>
      </div>

      {/* Navbar for small screens (Mobile version) */}
      <div className="md:hidden flex justify-between items-center p-6 bg-white shadow-md">
        {/* Mobile menu toggle button */}
        <h1 className='text-3xl font-bold'>SHOP.CO</h1>
        <button
          className="text-xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        
      </div>

      {/* Mobile menu items */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center p-6 bg-white shadow-md">
          <Link href='/shop' className="py-2 hover:text-gray-600">Shop</Link>
          <Link href='/sale' className="py-2 hover:text-gray-600">Sale</Link>
          <Link href='/newArrivals' className="py-2 hover:text-gray-600">New Arrivals</Link>
          <Link href='/brands' className="py-2 hover:text-gray-600">Brands</Link>
        </div>
      )}

      {/* Icons section for small screens */}
      <div className="md:hidden flex justify-between p-4 bg-white shadow-md fixed bottom-0 w-full">
        <CiUser className="cursor-pointer text-xl" />
        <FaSearch className="cursor-pointer text-xl" />
        <CiHeart className="cursor-pointer text-xl" />
        <FiShoppingCart className="cursor-pointer text-xl" />
      </div>
    </>
  );
}
