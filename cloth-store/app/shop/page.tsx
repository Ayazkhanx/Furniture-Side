'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GoPlus } from 'react-icons/go';
import { HiMiniMinusSmall } from 'react-icons/hi2';
import pic1 from '../public/1.1.png';
import pic2 from '../public/1.2.png';
import pic3 from '../../public/1.19.png';
import pic4 from '../../public/1.18.png';
import pic5 from '../../public/1.21.png';
import pic6 from '../../public/1.20.png';
import Image from 'next/image';

function TshirtPage() {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  // Images array for "You might also like" section
  const images = [
    { id: 1, name: 'Polo with Contrast Trims', price: 212, image: pic5 },
    { id: 2, name: 'Gradient Graphic T-shirt', price: 145, image: pic6 },
    { id: 3, name: 'Polo with Tipping Details', price: 180, image: pic3 },
    { id: 4, name: 'Black Striped T-Shirt', price: 130, image: pic4 },
  ];

  return (
    <div className="p-10 m-10">
      {/* Tshirt Product Section */}
      <div className="grid grid-cols-12 gap-6 p-10">
  {/* Image Gallery (2 columns) */}
  <div className="col-span-2 space-y-2 flex flex-col">
  <img src="1.2.png" alt="Image 1" className="w-[300px] h-[130px] object-cover rounded-md "/>
      <img src="1.1.png" alt="Image 2" className="w-[300px] h-[160px] object-cover rounded-md" />
      <img src="1.2.png" alt="Image 3" className="rounded:md w-[300px] h-[130px] object-cover" />
  </div>

  {/* Main Image (4 columns) */}
  <div className="col-span-4 flex flex-col">
  <img src="1.2.png" alt="Image 1" className="rounded object-cover" width={300} height={100}/>
  </div>

  {/* Product Info Section (5 columns) */}
  <div className="col-span-5 px-6  flex flex-col justify-between min-h-full">
    <h1 className="text-4xl font-extrabold">One Life Graphic T-shirt</h1>
    <h2>$260</h2>
    <p className='text-gray-400'>
      This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
    </p>

    {/* Size Selection */}
    <div>
      <p>Choose size</p>
      <div className="flex gap-4">
        <Button>Small</Button>
        <Button>Medium</Button>
        <Button>Large</Button>
        <Button>X-Large</Button>
      </div>
    </div>

    {/* Quantity and Add to Cart */}
    <div className="flex flex-row gap-4 items-center">
      <div className="flex items-center gap-2">
        <button className="bg-gray-400 rounded p-2" onClick={handleMinus}>
          <HiMiniMinusSmall />
        </button>
        <span>{count}</span>
        <button className="bg-gray-400 rounded p-2" onClick={handlePlus}>
          <GoPlus />
        </button>
      </div>

      <Button>Add to Cart</Button>
    </div>
  </div>
</div>


      {/* "You Might Also Like" Section */}
      <div className="text-center p-10 ">
        <h1 className="text-4xl font-extrabold">You might also like</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
        {images.map((image) => (
          <div key={image.id} className="text-start">
            <Image
              src={image.image}
              alt={image.name}
              width={250}
              height={150}
              className="object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{image.name}</h2>
            <p className="text-lg font-semibold">${image.price}</p>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="grid grid-cols-12 gap-4 p-4 bg-black text-white rounded-md mt-16">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-6 p-4 flex items-center">
          <h1 className="font-bold text-3xl">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
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

export default TshirtPage;
