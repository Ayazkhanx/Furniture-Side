'use client'
import Image from 'next/image'
import { useState } from 'react'
import pic1 from '../../public/1.20.png'
import pic2 from '../../public/1.19.png'
import pic3 from '../..//public/1.18.png'
import pic4 from '../../public/1.13.png'
import pic5 from '../../public/1.12.png'
import pic6 from '../../public/1.11.png'
import pic7 from '../../public/1.10.png'
import pic8 from '../../public/1.9.png'
import pic9 from '../../public/1.8.png'
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from '@/components/ui/button';

export default function CasualPage() {

  const products = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, image: pic1 },
    { id: 2, name: 'Polo with Tipping Details', price: 180, image: pic2 },
    { id: 3, name: 'Black Striped T-shirt', price: 120, image: pic3 },
    { id: 4, name: 'SKINNY FIT JEANS', price: 240, image: pic4 },
    { id: 5, name: 'CHECKERED SHIRT', price: 180, image: pic5 },
    { id: 6, name: 'SLEEVE STRIPED T-SHIRT', price: 130, image: pic6 },
    { id: 7, name: 'VERTICAL STRIPED SHIRT', price: 212, image: pic7 },
    { id: 8, name: 'COURAGE GRAPHIC T-SHIRT', price: 145, image: pic8 },
    { id: 9, name: 'LOOSE FIT BERMUDA SHORTS', price: 80, image: pic9 },
  ];

  const [value, setValue] = useState([50, 140]);

  return (
    <div className='p-6 m-10'>
      {/* Filter Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className='lg:col-span-3 col-span-12 bg-white shadow-lg rounded-lg p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-xl font-semibold'>Filter</h1>
            <VscSettings className='text-lg' />
          </div>

          {/* Categories */}
          <div className='gap-4 mb-6'>
            <p className='cursor-pointer flex items-center justify-between'>
              T-Shirts <span><MdOutlineKeyboardArrowRight /></span>
            </p>
            <p className='cursor-pointer flex items-center justify-between'>
              Shorts <span><MdOutlineKeyboardArrowRight /></span>
            </p>
            <p className='cursor-pointer flex items-center justify-between'>
              Shirts <span><MdOutlineKeyboardArrowRight /></span>
            </p>
            <p className='cursor-pointer flex items-center justify-between'>
              Hoodie <span><MdOutlineKeyboardArrowRight /></span>
            </p>
            <p className='cursor-pointer flex items-center justify-between'>
              Jeans <span><MdOutlineKeyboardArrowRight /></span>
            </p>
          </div>

          {/* Price Range */}
          <div className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>Price Range</h2>
            <Box sx={{ width: '80%' }}>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                valueLabelDisplay="auto"
              />
            </Box>
          </div>

          {/* Size Filter */}
          <div className='size mb-6'>
            <h2 className='text-lg font-semibold mb-2'>Size</h2>
            <div className='flex flex-wrap gap-4'>
              <Button className='text-sm'>Extra Small</Button>
              <Button className='text-sm'>Small</Button>
              <Button className='text-sm'>Medium</Button>
              <Button className='text-sm'>Large</Button>
              <Button className='text-sm'>X-Large</Button>
              <Button className='text-sm'>XXL</Button>
            </div>
          </div>

          {/* Style Filter */}
          <div className='dress-style'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-lg font-semibold'>Style</h1>
              <MdOutlineKeyboardArrowRight className='text-lg cursor-pointer' />
            </div>
            <div className=' gap-4'>
              <div className='flex items-center justify-between'>
                <h1 className='text-sm'>Casual</h1>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div className='flex items-center justify-between'>
                <h1 className='text-sm'>Formal</h1>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div className='flex items-center justify-between'>
                <h1 className='text-sm'>Party</h1>
                <MdOutlineKeyboardArrowRight />
              </div>
              <div className='flex items-center justify-between'>
                <h1 className='text-sm'>Gym</h1>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className='lg:col-span-9 col-span-12'>
          <h2 className='text-xl font-semibold mb-6'>Casual</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product) => (
              <div key={product.id} className='text-center bg-white shadow-lg rounded-lg p-4'>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="mx-auto"
                />
                <p className='mt-2'>{product.name}</p>
                <p className='text-gray-600'>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="grid grid-cols-12 gap-4 p-4 bg-black text-white rounded-md mt-16">
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
