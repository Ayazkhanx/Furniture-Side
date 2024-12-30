import React from 'react'
import pic from '../public/1.15.jpg'; 
import { Button } from '@/components/ui/button';
import pic1 from '../public/1.11.png'
import pic2 from '../public/1.12.png'
import pic3 from '../public/1.13.png'
import pic4 from '../public/1.14.png'
import Image from 'next/image'
import pic5 from '../public/1.7.png'
import pic6 from '../public/1.8.png'
import pic7 from '../public/1.9.png'
import pic8 from '../public/1.10.png'
import pic9 from '../public/1.6.png'; 
import pic10 from '../public/1.5.png';
import pic11 from '../public/1.3.png';
import pic12 from '../public/1.4.png';
import Link from 'next/link';

export default function page() {
  const images = [
    {
      id: 1,
      name: 'T-Shirt with Tape Details',
      price: 150,
      image: pic1
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      price: 240,
      image: pic2
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      price: 180,
      image: pic3
    },
    {
      id: 4,
      name: 'Sleeve Striped T-Shirt',
      price: 130,
      image: pic4
    },
    {
    id: 5,
      name: 'VERTICAL STRIPED SHIRT',
      price: 220,
      image: pic5
    },
    {
      id: 6,
      name: 'COURAGE GRAPHIC T-SHIRT',
      price: 145,
      image: pic6
    },
    {
      id: 7,
      name: 'LOOSE FIT BERMUDA SHORTS',
      price: 80,
      image: pic7
    },
    {
      id: 8,
      name: 'FADED SKINNY JEANS',
      price: 210,
      image: pic8
    }
  ];


  return (
    <div className=''>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 h-auto bg-[#F2F0F1] items-center justify-center px-10 ">
            
            {/* Left side: Text Content */}
            <div className=" col-span-1 flex-col items-start space-y-4 flex ">
              <h1 className='text-6xl font-extrabold '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>
                Browse through our diverse range of meticulously crafted garments, designed to bring out 
                your individuality and cater to your sense of style.
              </p>
              <Link href={'shop'} ><Button>Shop Now</Button></Link>
              
            </div>
      
            {/* Right side: Image */}
            <div className="grid col-span-1 pb-0 bg-white">
              <Image src={pic} alt="Stylish Clothes"/>
            </div>
          </div>

          {/* 2nd sec  */}

          <div className='flex flex-wrap justify-around gap-4 p-6 bg-black h-auto items-center text-2xl text-[#ffffff]'>
      <h1 className='text-center sm:text-left w-full sm:w-auto'>VERCASE</h1>
      <h1 className='text-center sm:text-left w-full sm:w-auto'>ZARA</h1>
      <h1 className='text-center sm:text-left w-full sm:w-auto'>GUCCI</h1>
      <h1 className='text-center sm:text-left w-full sm:w-auto font-extrabold'>PRADA</h1>
      <h1 className='text-center sm:text-left w-full sm:w-auto'>Calvin Klein</h1>
    </div>

    <div className="p-10">
          
          <div className="flex items-center justify-center">
            <h1 className="text-5xl p-6 font-extrabold">New Arrivals</h1>
          </div>
    
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center justify-center mt-8">
            {images.map((image) => (
              <div key={image.id} className="text-start ">
                <Image 
                  src={image.image}
                  alt={image.name}
                  width={250} 
                  height={150}  
                  className="object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{image.name}</h2>
                <p className="text-lg font-semibold">${image.price}</p>
              </div>
            ))}
          </div>
    
          <div className="flex justify-center mt-8">
            <Button>View All</Button>
          </div>
        </div>

        <div className='p-10'>
        <div className="flex items-center justify-center ">
                <h1 className="text-5xl p-6 font-extrabold">Top Selling</h1>
              </div>
        
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 
              gap-4 items-center justify-center mt-8">
                
                {images.map((image) => (
                  <div key={image.id} className="text-start ">
                    <Image 
                      src={image.image}
                      alt={image.name}
                      width={250} 
                      height={150} 
                      className="object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">{image.name}</h2>
                    <p className="text-lg font-semibold">${image.price}</p>
                  </div>
                ))}
              </div>
        
              <div className="flex justify-center mt-8">
                <Button >View All</Button>
              </div>
              </div>

              <div className="p-10 m-10 rounded-md bg-[#F0F0F0]">
      {/* Header Section */}
      <div className="flex justify-center p-10 items-center">
        <h1 className="text-3xl font-extrabold">BROWSE BY DRESS STYLE</h1>
      </div>

      <div className="space-y-4">
  {/* First row of images */}
  <div className="flex flex-col lg:flex-row gap-4 h-auto">
    <div className="w-full lg:w-1/3 h-auto">
      <Image
        src={pic9}
        alt="Dress Style 1"
        height={400}
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
    <div className="w-full lg:w-2/3 h-auto">
      <Image
        src={pic10}
        alt="Dress Style 2"
        height={400}
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Second row of images */}
  <div className="flex flex-col lg:flex-row gap-4 h-auto">
    <div className="w-full lg:w-2/3 h-auto">
      <Image
        src={pic12}
        alt="Dress Style 3"
        width={900}
        height={400}
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
    <div className="w-full lg:w-1/3 h-auto">
      <Image
        src={pic11}
        alt="Dress Style 4"
        width={450}
        height={450}
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  </div>
</div>


    </div>

    <div className="grid grid-cols-12 gap-4 m-12 p-6 bg-black text-white rounded-md">
          {/* Text Section: Takes 6 columns */}
          <div className="col-span-12 lg:col-span-6 p-4 flex items-center">
            <h1 className="font-bold text-3xl">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
          </div>
    
          {/* Input and Button Section: Takes 6 columns */}
          <div className="col-span-12 lg:col-span-6 justify-center items-center space-y-2 p-4 ">
            <input
              type="text"
              className="w-full p-2 rounded-lg text-black"
              placeholder="Enter your email"
            />
            <Button className="rounded-lg bg-white w-full p-2 text-black ">Subscribe Now</Button>
          </div>
        </div>

    </div>
  )
}
