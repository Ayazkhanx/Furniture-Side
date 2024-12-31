import React from 'react'
import pic1 from '../../public/3.1.png'
import pic2 from '../../public/3.2.png'
import pic3 from '../../public/3.3.png'
import pic4 from '../../public/3.4.png'
import pic5 from '../../public/3.44.png'
import pic6 from '../../public/3.6.png'
import pic7 from '../../public/3.7.png'
import pic8 from '../../public/3.8.png'
import pic9 from '../../public/3.9.png'
import pic10 from '../../public/3.10.png'
import pic11 from '../../public/3.11.png'
import pic12 from '../../public/3.12.png'
import pic13 from '../../public/3.44.png'
import pic14 from '../../public/3.44.png'
import pic15 from '../../public/3.44.png'
import pic16 from '../../public/3.44.png'
import pic17 from '../../public/3.44.png'
import pic18 from '../../public/3.44.png'
import pic19 from '../../public/3.19.png'
import pic20 from '../../public/3.44.png'
import pic21 from '../../public/3.23.png'
import pic22 from '../../public/3.22.png'
import pic23 from '../../public/3.23.png'
import pic24 from '../../public/3.24.png'
import pic25 from '../../public/3.25.png'
import pic26 from '../../public/3.26.png'
import pic27 from '../../public/3.27.png'
import pic28 from '../../public/3.28.png'
import pic29 from '../../public/3.29.png'
import pic30 from '../../public/3.30.png'
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Image from 'next/image'



export default function page() {

    const products = [
      { id: 1, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic1 },
      { id: 2, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic2 },
      { id: 3, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic3 },
      { id: 4, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic4 },
      { id: 5, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic5 },
      { id: 6, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic6 },
      { id: 7, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic7 },
      { id: 8, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic8 },
      { id: 9, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic9 },
      { id: 10, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic10 },
      { id: 11, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic11 },
      { id: 12, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic12 },
      { id: 13, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic13 },
      { id: 14, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic14 },
      { id: 15, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic15 },
      { id: 16, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic16 },
      { id: 17, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic17 },
      { id: 18, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic18 },
      { id: 19, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic19 },
      { id: 20, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic20 },
      { id: 21, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic21 },
      { id: 22, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic22 },
      { id: 23, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic23 },
      { id: 24, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic24 },
      { id: 25, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic25 },
      { id: 26, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic26 },
      { id: 27, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic27 },
      { id: 28, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic28 },
      { id: 29, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic29 },
      { id: 30, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic30 },
    ];
  
    return (
      <div className='p-10 grid-rows-2'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold'>New (500)</h1>
          <div className='flex gap-4'>
            <h1>Hide Filters</h1>
            <LuSettings2 />
            <h1>Sort By</h1>
            <IoIosArrowDown />
          </div>
        </div>
  
        <div className='grid grid-cols-12 pt-2 gap-4'>
          {/* Filters Section */}
          <div className='lg:col-span-3 col-span-6 space-y-4'>
            <div className='grid gap-2 p-4 border shadow-md'>
              <h1>Shoes</h1>
              <h1>Sports Bra</h1>
              <h1>Tops & T-shirts</h1>
              <h1>Hoodies & Sweatshirts</h1>
              <h1>Jackets</h1>
              <h1>Trouser & Tights</h1>
              <h1>Shorts</h1>
              <h1>Track Suits</h1>
              <h1>Jumpsuits & Rompers</h1>
              <h1>Skirts & Dresses</h1>
              <h1>Socks</h1>
              <h1>Accessories & Equipments</h1>
            </div>
  
            {/* Gender Filters */}
            <div className='grid p-4 gap-2 border shadow-md '>
              <div className='flex justify-between'>
                <h1>Gender</h1>
                <IoIosArrowUp />
              </div>
              <div className='flex items-center'>
              <MdCheckBoxOutlineBlank />
                <h1>Men</h1>
              </div>
              <div className='flex items-center'>
              <MdCheckBoxOutlineBlank />
                <h1>Women</h1>
              </div>
              <div className='flex items-center'>
              <MdCheckBoxOutlineBlank />
                <h1>Unisex</h1>
              </div>
            </div>
  
            {/* Kids Filters */}
            <div className='border p-4 grid gap-3 shadow-md'>
              <div className='flex justify-between'>
                <h1>Kids</h1>
                <IoIosArrowUp />
              </div>
              <div className='flex items-center'>
              <MdCheckBoxOutlineBlank />
                <h1>Boys</h1>
              </div>
              <div className='flex items-center'>
              <MdCheckBoxOutlineBlank />
                <h1>Girls</h1>
              </div>
            </div>
  
            {/* Price Filters */}
            <div className='border p-4 grid items-center shadow-md gap-3'>
              <div className='flex justify-between'>
                <h1>Shop By Price</h1>
                <IoIosArrowUp />
              </div>
              <div className='flex items-center'>
              <MdCheckBoxOutlineBlank />
                <h1>Under &#x20A8; 2500</h1>
                
              </div>
              <div className='flex items-center'>
              <MdCheckBoxOutlineBlank />
                <h1>&#x20A8; 2501.00</h1>
              </div>
            </div>
          </div>
  
          {/* Products Section */}
          <div className='lg:col-span-9 col-span-12 grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
            {products.map((product, index) => (
              <div key={index} className='grid grid-cols-12 gap-4 border-b py-4'>
                {/* Image */}
                <div className='col-span-9'>
                  <Image src={product.image} alt={product.name} width={600} height={300} />
                  <h1 className='text-lg font-semibold'>{product.name}</h1>
                  <p className='text-sm'>{product.price} &#x20A8;</p>
                  <p className='text-sm'>{product.catogery}</p>
                </div>

                  
                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  