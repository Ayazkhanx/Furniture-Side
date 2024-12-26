'use client'
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { GoPlus, GoTag } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import pic1 from "../../public/1.20.png";
import pic2 from "../../public/1.13.png";
import Image from "next/image";

export default function CartPage() {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-6 m-10">
      {/* Title */}
      <div className="flex justify-start mb-8">
        <h1 className="text-5xl font-extrabold">Your Cart</h1>
      </div>

      {/* Cart Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Products Section */}
        <div className="col-span-12 md:col-span-7 space-y-8">
          {[1, 2].map((item, index) => (
            <div key={index} className="flex gap-6 p-4 border rounded-lg shadow-md">
              <Image
                src={index === 0 ? pic1 : pic2}
                alt=""
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    {index === 0 ? "Gradient Graphic T-shirt" : "CHECKERED SHIRT"}
                  </h2>
                  <MdDelete className="cursor-pointer text-red-500 hover:text-red-700" />
                </div>
                <p className="text-gray-600">
                  Size: <span className="text-gray-400">{index === 0 ? "Large" : "Medium"}</span>
                </p>
                <p className="text-gray-600">
                  Color: <span className="text-gray-400">{index === 0 ? "White" : "Red"}</span>
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <h3 className="text-xl font-semibold text-green-600">
                    ${index === 0 ? "145" : "180"}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-gray-400 text-white rounded p-2"
                      onClick={handleMinus}
                    >
                      <HiMiniMinusSmall />
                    </button>
                    <span>{count}</span>
                    <button
                      className="bg-gray-400 text-white rounded p-2"
                      onClick={handlePlus}
                    >
                      <GoPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-span-12 md:col-span-5 bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-semibold">Order Summary</h2>

          <div className="flex justify-between text-lg font-medium">
            <h3>Subtotal</h3>
            <h3>$325</h3>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <h3>Discount (-20%)</h3>
            <h3 className="text-red-600">-$65</h3>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <h3>Delivery Fee</h3>
            <h3>$15</h3>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-semibold">
            <h3>Total</h3>
            <h3>$275</h3>
          </div>

          {/* Promo Code Section */}
          <div className="flex items-center gap-2">
            <GoTag className="text-xl text-gray-600" />
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 bg-gray-200 rounded-xl p-2"
            />
            <Button className="bg-black text-white rounded-lg px-4 py-2">Apply</Button>
          </div>

          <Button className="bg-black text-white rounded-lg w-full py-3">Go to Checkout</Button>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="grid grid-cols-12 gap-4 mt-4 p-4 bg-black text-white rounded-md">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-6 p-4 flex items-center">
          <h1 className="font-bold text-3xl">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>

        {/* Input and Button Section */}
        <div className="col-span-12 lg:col-span-6 justify-center items-center p-4">
          <input
            type="text"
            className="w-full p-2 rounded-lg text-black"
            placeholder="Enter your email"
          />
          <Button className="rounded bg-white w-full p-2 text-black m-2">Subscribe Now</Button>
        </div>
      </div>
    </div>
  );
}
