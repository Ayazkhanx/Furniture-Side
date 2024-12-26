import pic from '../public/shop 1.jpg'; // Image import for background
// import logo from '../public/logo.png';
import { IoIosArrowForward } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function Cart() {
  return (
    <div>
      {/* Section 1: Cart Header */}
      <div className="p-10 blog1">
        <div className="text-3xl text-black font-bold mt-5 flex flex-col justify-center items-center h-full">
          {/* <Image src={logo} alt="Logo" width={150} height={150} /> Logo */}
          <h1>Cart</h1>

          <div className="flex items-center p-10">
            <p>Home</p>
            <IoIosArrowForward />
            <p className="text-gray-400">Cart</p>
          </div>
        </div>
      </div>

      {/* Section 2: Cart Items and Totals */}
      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto p-6">
          {/* Cart Header */}
          <div className="grid grid-cols-12 gap-8 items-center pb-4 bg-[#F9F1E7] py-3 text-center">
            <h2 className="font-semibold text-[16px] col-span-3 sm:col-span-4">Product</h2>
            <h2 className="font-semibold text-[16px] col-span-2 sm:col-span-4">Price</h2>
            <h2 className="font-semibold text-[16px] col-span-2 sm:col-span-4">Quantity</h2>
            <h2 className="font-semibold text-[16px] col-span-2 sm:col-span-4">Subtotal</h2>
          </div>

          {/* Cart Items */}
          <div className="grid grid-cols-12 gap-8">
            {/* Product Section (takes 8 columns on larger screens, full width on small screens) */}
            <div className="col-span-12 sm:col-span-8">
              <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex items-center space-x-4 w-full">
                  <img
                    src="shop 2.png"
                    alt="Asgaard sofa"
                    className="h-[105px] w-[108px] object-cover rounded-md"
                  />
                  <div className="flex flex-col w-full ml-4 gap-y-2">
                    <h3 className="text-[#9F9F9F] text-[16px] font-medium">Asgaard sofa</h3>
                    <p className="text-gray-500">Rs. 250,000.00</p>
                    <div className="flex items-center justify-between mt-2">
                      <input
                        type="number"
                        defaultValue="1"
                        className="w-16 border rounded-md text-center py-1"
                      />
                      <p className="text-black">Rs. 250,000.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Totals Section (takes 4 columns on larger screens, full width on small screens) */}
            <div className="col-span-12 sm:col-span-4">
              <div className="bg-[#F9F1E7] py-11 w-full rounded-lg shadow-lg">
                <h2 className="font-semibold text-center text-2xl mb-6">Cart Totals</h2>
                <div className="p-4">
                  <div className="flex justify-between text-lg mb-4">
                    <span>Subtotal</span>
                    <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                  </div>
                  <div className="flex justify-between text-lg mb-6">
                    <span>Total</span>
                    <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="flex justify-center">
                  <button className="w-full md:w-[222px] border-2 border-black rounded-[15px] py-3 font-semibold text-[20px] hover:bg-black hover:text-white transition">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Extra Information (Quality, Warranty, Shipping, Support) */}
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
