// import React from "react";
// import Image from "next/image";
// import pic1 from "../../public/3.6.png";
// import pic2 from "../../public/3.8.png";
// import { CiHeart } from "react-icons/ci";
// import { AiOutlineDelete } from "react-icons/ai";
// import { Button } from "@/components/ui/button";

// export default function page() {
//   const products = [
//     {
//       id: 1,
//       name: "Nike Dri-FIT ADV TechKnit Ultra",
//       description: `Men's Short-Sleeve Running Top`,
//       size: "Large",
//       Quantity: 1,
//       image: pic1,
//       price: 3500,
//     },
//     {
//       id: 2,
//       name: "Nike Air Max 97 SE",
//       description: `Men's Shoes`,
//       size: "Large",
//       Quantity: 3,
//       image: pic2,
//       price: 4000,
//     },
//   ];
//   return (
//     <div className="grid-cols-12 p-10">
//       <div className="grid-cols-9 space-y-4">
//         <div className="pb-4 space-y-2">
//           <h1 className="font-bold">FREE DELIVERY</h1>
//           <p>
//             Applies to orders of ₹ 14 000.00 or more.{" "}
//             <span className="underline font-bold">view Details</span>{" "}
//           </p>
//         </div>

//         <div>
//           <h1 className="font-bold">Bag</h1>
//         </div>

//         <div className="space-y-4">
//           {products.map((product, index) => (
//             <div key={product.id}>
//               <div className="flex ">
//                 <Image src={product.image} alt="image" />
//                 <div className="">
//                   <div className="flex justify-between">
//                     <h1>{product.name}</h1>
//                     <h1>{product.price}</h1>
//                   </div>

//                   <h1>{product.description}</h1>
//                   <div className="flex gap-8">
//                     <h1>{product.size}</h1>
//                     <h1>{product.Quantity}</h1>
//                   </div>
//                   <div className="flex gap-4">
//                     <CiHeart />
//                     <AiOutlineDelete />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid-cols-3">
//         <div className="">
//           <h1>Summery</h1>
//           <div className="flex justify-between">
//             <h1>Subtotal</h1>
//             <h1>4500</h1>
//           </div>

//           <div className="flex justify-between">
//             <h1>Estimated Delivery & Handling</h1>
//             <h1>Free</h1>
//           </div>

//           <div className="flex justify-between">
//             <h1>Total</h1>
//             <h1>4500</h1>
//           </div>
//           <Button>Member Checkout</Button>
//         </div>
//       </div>
//     </div>
//   );
// }












import React from 'react'
import Image from 'next/image'
import pic1 from '../../public/3.6.png'
import pic2 from '../../public/3.8.png'
import { CiHeart } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from '@/components/ui/button';

export default function Page() {
  const products = [
    {
      id: 1,
      name: 'Nike Dri-FIT ADV TechKnit Ultra',
      description: `Men's Short-Sleeve Running Top`,
      size: 'Large',
      Quantity: 1,
      image: pic1,
      price: 3500,
    },
    {
      id: 2,
      name: 'Nike Air Max 97 SE',
      description: `Men's Shoes`,
      size: 'Large',
      Quantity: 3,
      image: pic2,
      price: 4000,
    },
  ];

  return (
    <div className="grid grid-cols-12 p-10 gap-8">
      {/* Main Content - 9 columns */}
      <div className="col-span-9 space-y-6">
        <div className="pb-4 space-y-2">
          <h1 className="font-bold">FREE DELIVERY</h1>
          <p>
            Applies to orders of ₹ 14,000.00 or more.{' '}
            <span className="underline font-bold">view Details</span>
          </p>
        </div>

        <div>
          <h1 className="font-bold">Bag</h1>
        </div>

        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="flex items-center space-x-4 border-b pb-4">
              <Image src={product.image} alt="image" width={100} height={100} />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h1>{product.name}</h1>
                  <h1>₹{product.price}</h1>
                </div>
                <h1 className="text-sm text-gray-500">{product.description}</h1>
                <div className="flex gap-8 mt-2">
                  <h1>Size: {product.size}</h1>
                  <h1>Quantity: {product.Quantity}</h1>
                </div>
                <div className="flex gap-4 mt-2 text-xl text-gray-600">
                  <CiHeart />
                  <AiOutlineDelete />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary - 3 columns */}
      <div className="col-span-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="font-bold text-xl mb-4">Summary</h1>
          <div className="flex justify-between mb-4">
            <h1>Subtotal</h1>
            <h1>₹4500</h1>
          </div>

          <div className="flex justify-between mb-4">
            <h1>Estimated Delivery & Handling</h1>
            <h1>Free</h1>
          </div>

          <div className="flex justify-between mb-6">
            <h1 className="font-bold">Total</h1>
            <h1 className="font-bold">₹4500</h1>
          </div>

          <Button className='w-full'>Member Checkout</Button>
        </div>
      </div>
    </div>
  );
}
