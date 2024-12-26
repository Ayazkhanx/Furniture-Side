import { IoIosArrowForward } from 'react-icons/io';
import { FaPhoneAlt, FaClock, FaTrophy, FaShippingFast } from 'react-icons/fa';
import { LuBadgeCheck } from 'react-icons/lu';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaLocationDot } from "react-icons/fa6";

// 1st Section: Contact Header
export default function Contact() {
  return (
    <div>
      {/* Contact Section 1 */}
      <div className="p-10 blog1">
        <div className="text-3xl text-black font-bold mt-5 flex flex-col justify-center items-center h-full">
          <img src="/logo.png" alt="Logo" width={150} height={150} /> {/* Logo */}
          <h1>Contact</h1>
          <div className="flex items-center p-10">
            <p>Home</p>
            <IoIosArrowForward />
            <p className="text-gray-400"> Contact</p>
          </div>
        </div>
      </div>

      {/* Contact Section 2 */}
      <div className="px-6 py-24 sm:px-12 lg:px-24">
        {/* Heading and Paragraph */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">Get In Touch With Us</h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff
            Are Always Here To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Address and Form Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Address Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FaLocationDot className="text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaClock className="text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Working Time</h2>
                <p>Monday-Friday: 9:00 AM - 10:00 PM</p>
                <p>Saturday-Sunday: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900">Name</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900">Email</label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Subject */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900">Subject</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white rounded-md shadow-sm focus:outline-none focus:ring-2"
                  style={{ backgroundColor: '#FAF3EA' }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Shop Section 3 */}
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
