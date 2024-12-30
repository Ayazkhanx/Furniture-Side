import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import pic1 from '../public/3.1.png'
import pic3 from '../public/3.2.png'
import pic2 from '../public/3.3.png'
import pic4 from '../public/3.4.png'
import pic5 from '../public/3.5.jpg'
import pic6 from '../public/3.6.png'
import pic7 from '../public/3.7.png'
import pic8 from '../public/3.8.png'
import pic9 from '../public/3.9.png'
import pic10 from '../public/3.10.png'
import pic11 from '../public/3.11.png'
import pic12 from '../public/3.12.png'
import pic13 from '../public/3.13.png'
import pic14 from '../public/3.4.png'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

export default function Home() {
  const products = [
    { name: 'Nike Air max Shoe', category: `women's Shoes`, id:1, price: '$120', image: pic6 },
    { name: 'Nike Air 69 Shoe', category: `men's Shoes`, id:2, price: '$120', image: pic7 },
    { name: 'Nike Air 96 Shoe', category: `men's Shoes`, id:3, price: '$120', image: pic8 },
    { name: 'Nike Air 97 Shoe', category: `women's Shoes`, id:4, price: `$120`, image: pic9 }
  ]

  const products2 = [
    { image: pic2, id:5, category: `Man's`, name:'Nike Air max Shoe', price: `$120`},
    { image: pic3, id:6, category: `Man's`,  name:'Nike Air max Shoe', price: `$120`},
    { image: pic4, id:7, category: `Women's`, name:'Nike Air max Shoe', price: `$120`}
  ]

  const product3 = [
    { name: ` Man's`, id: 8, image: pic11 },
    { name: ` Man's`, id: 9, image: pic12 },
    { name: ` Woman's`, id: 10, image: pic12 }
  ]



  return (
    <div>
     
      <div className='bg-[#e5e5e5] items-center p-2'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold'>Hello Nike</h1>
        </div>
        <div className='flex justify-center items-center'>
          <p >Download the app to access everything Nike. Get Your Great</p>
        </div>
      </div>

      {/* Home2 */}
      <div className=''>
        <Image src={pic1} alt="" />
      </div>

      {/* Home3 */}
      <div className='p-10 justify-center grid gap-4 items-center'>
        <div className='flex justify-center items-center font-semibold'>
          <h1>First Look</h1>
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-5xl font-semibold'>Nike Air Max Pulse</h1>
        </div>
        <div className='justify-center items-center text-2xl flex '>
          <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you 
            past your limits and help you go to the max.</p>
        </div>
        <div className='flex gap-4 justify-center items-center'>
          <Button className='rounded-md text-white bg-black'>Notify me</Button>
          <Button className='rounded-md text-white bg-black'>Show Air max</Button>
        </div>
      </div>

      {/* Home4 */}
      <div className='grid-rows-2 p-10'>
        <div className='grid-rows-1 flex justify-between'>
          <h1 className='font-bold text-1xl'>Best of Air max</h1>
          <div className='flex gap-2'>
            <h1>Shop</h1>
            <IoIosArrowBack />
            <IoIosArrowForward />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          {products2.map((product) => (
            <div key={product.id} className='flex flex-col border-gray-400 rounded-md'>
              <Image src={product.image} alt=''/>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-lg'>{product.name}</h1>
                <h1 className='text-lg'>{product.category}</h1>
                <h1 className='text-lg'>{product.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Home5 */}
      <div className='grid-cols-3 p-8'>
        <div className='flex font-bold'>
          <h1>Featured</h1>
        </div>
        <div>
          <Image src={pic5} alt="" className='rounded-md'/>
        </div>
        <div className='gap-6 grid pt-6'>
          <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-bold'>STEP INTO WHAT FEELS GOOD</h1>
          </div>
          <div className='flex justify-center items-center'>
            <p>Cause everyone should know the feeling of running in that perfect pair.</p>
          </div>
          <div className='flex justify-center items-center'>
            <Button className='bg-black text-white'>Find Your Shoes</Button>
          </div>
        </div>
      </div>

      {/* Home6 */}
      <div className='p-10'>
        <div>
          <h1 className='font-bold text-xl'>Gear Up</h1>
        </div>
        <div className='grid grid-cols-2 gap-6 p-6'>
          {/* First set of images */}
          <div className='flex flex-col'>
            <div className='flex gap-2 justify-end items-center'>
              <h1 className='text-lg'>Shoe</h1>
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
            <div className='flex gap-4'>
              {products.slice(0, 2).map((product) => (
                <div key={product.id} className='flex flex-col items-center'>
                  <Image src={product.image} alt={product.name} className='object-cover' />
                  <h2 className='text-sm'>{product.name}</h2>
                  <p className='text-sm'>{product.category}</p>
                  <p className='text-sm'>{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second set of images */}
          <div className='flex flex-col'>
            <div className='flex gap-2 justify-end items-center'>
              <h1 className='text-lg'>Shoe</h1>
              <IoIosArrowBack />
              <IoIosArrowForward />
            </div>
            <div className='flex gap-4'>
              {products.slice(2, 4).map((product) => (
                <div key={product.id} className='flex flex-col items-center'>
                  <Image src={product.image} alt={product.name} className='object-cover' />
                  <h2 className='text-sm'>{product.name}</h2>
                  <p className='text-sm'>{product.category}</p>
                  <p className='text-sm'>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Home7 */}
      <div className='grid-rows-3 p-8 m-2'>
        <div className='flex'>
          <h1 className='font-bold'>Don`t Miss</h1>
        </div>
        <div>
          <Image src={pic10} alt="" className='rounded-md'/>
        </div>
        <div className='space-y-6'>
          <div className='flex justify-center pt-8 items-center'>
            <h1 className='text-5xl font-bold'>FLIGHT ESSENTIALS</h1>
          </div>
          <div className='flex justify-center items-center'>
            <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          </div>
          <div className='flex justify-center items-center'>
            <Button className='bg-black text-white'>Shop</Button>
          </div>
        </div>
      </div>

      {/* Home8 */}
      <div className='p-10 mt-4'>
        <h1 className='font-extrabold'>The Essentials</h1>
        <div className='flex gap-4 mt-6'>
          {product3.map((product) => (
            <div key={product.id} className="relative group">
              <Image 
                src={product.image} 
                alt={product.name}
                width={600} 
                className="h-auto rounded"
              />
              <h2 className="absolute bottom-4 right-4 bg-white rounded-md
               text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">{product.name}</h2>
            </div>
          ))}
        </div>
        <div>
          <div className='grid-cols-4 flex justify-around pt-10 text-gray-400'>
            <div className='grid-cols-1 grid gap-4'>
              <h1 className='text-black font-bold'>Icons</h1>
              <p>Air Force 1</p>
              <p>Hurrache</p>
              <p>Air max 90</p>
              <p>Air max 95</p>
            </div>
            <div className='grid-cols-1 grid gap-4'>
              <h1 className='text-black font-bold'>Shoes</h1>
              <p>All Shoes</p>
              <p>Custom Shoes</p>
              <p>Jordan Shoes</p>
              <p>Running Shoes</p>
            </div>
            <div className='grid-cols-1 grid gap-4'>
              <h1 className='text-black font-bold'>Clothing</h1>
              <p>All Clothing</p>
              <p>Modern Wear</p>
              <p>Hoodies & Pullovers</p>
              <p>Shirts & Tops</p>
            </div>
            <div className='grid-cols-1 grid gap-4'>
              <h1 className='text-black font-bold'>Kids</h1>
              <p>Infant & Toddlers Shoes</p>
              <p>Kid`s Shoes</p>
              <p>Kid`s Jordan Shoes</p>
              <p>Kid`s Basketball Shoes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

