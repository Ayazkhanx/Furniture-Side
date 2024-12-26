import React from 'react';
// import Image from 'next/image'; // Next.js Image component
// import pic from '../public/shop 1.jpg'; // Image import for background
// import logo from './public/logo.png';
import { IoIosArrowForward } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function Checkout() {
  return (
    <div>
      {/* Checkout Section 1 */}
      <div className="p-10 blog1">
        {/* Background Image is set in CSS */}
        <div className="text-3xl text-black font-bold mt-5 flex flex-col justify-center items-center h-full">
          {/* <Image src={logo} alt="Logo" width={150} height={150} /> Logo */}
          <h1>Checkout</h1>

          <div className="flex items-center p-10">
            <p>Home</p>
            <IoIosArrowForward />
            <p className="text-gray-400">Checkout</p>
          </div>
        </div>
      </div>

      {/* Checkout Section 2 */}
      <div className="grid grid-cols-12 p-10 m-8 gap-6">
        {/* Left Side - Form Inputs (6 columns) */}
        <div className="col-span-12 sm:col-span-6">
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Company Name (Optional) */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Company Name (Optional)</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Country Region */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Country/Region</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Street Address */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Street Address</label>
                <input
                  type="text"
                  name="street_address"
                  id="street_address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Town/City */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Town/City</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Province */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Province</label>
                <input
                  type="text"
                  name="province"
                  id="province"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* ZIP Code */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Phone Number */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Additional Information */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900">Additional Information</label>
                <input
                  type="text"
                  name="additional_info"
                  id="additional_info"
                  placeholder="Any special instructions"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Right Side - Products and Payment Info (6 columns) */}
        <div className="col-span-12 sm:col-span-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold justify-between flex mb-4"><span>Products</span><span>Sub Total</span></h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Asgaard Sofa</span><span>Rs. 250,000.00</span>
              </li>
              <li className="flex justify-between">
                <span>Subtotal</span><span>Rs. 250,000.00</span>
              </li>
              <li className="flex justify-between">
                <span>Total</span><span>Rs. 250,000.00</span>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg">Payment Methods</h1>
            <p className="text-sm">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <p className="text-sm">Direct Bank Transfer</p>
            <p className="text-sm">Cash On Delivery</p>
            <p className="text-sm">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          </div>

          <button className="mt-4 px-6 py-3 text-black font-semibold border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600">
            Place Order
          </button>
        </div>
      </div>

      {/* Checkout Section 3 */}
      <div className="flex flex-col md:flex-row justify-between p-10 rounded-lg" style={{ backgroundColor: '#FAF3EA' }}>
        {/* High Quality */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <FaTrophy className="text-4xl text-gold" />
          <div>
            <h4 className="text-xl font-semibold">High Quality</h4>
            <p className="text-sm text-gray-600">Crafted from top material</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <LuBadgeCheck className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">Warranty Protection</h4>
            <p className="text-sm text-gray-600">Over 2 Years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <FaShippingFast className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">Free Shipping</h4>
            <p className="text-sm text-gray-600">Order Over $150</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-4">
          <RiCustomerService2Fill className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">24 / 7 Support</h4>
            <p className="text-sm text-gray-600">Dedicated Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
