'use client'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { allProducts } from '@/sanity/lib/queries'
import { Product } from '@/types/products'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from'sweetalert2'
import { addtoCart } from '../action/action'
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";



export default function page() {

  const [product, setProduct] = useState<Product[]>([])
  
      useEffect(() => {
          async function fetchproduct() {
              const fetchProduct: Product[] = await client.fetch(allProducts)
              setProduct(fetchProduct)
              console.log(fetchProduct)
          }
          fetchproduct()
          
      }, [])
  
      const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: `${product.productName} added to cart!`,
          showConfirmButton: false,
          timer: 4000,
        })
  
        addtoCart(product)
      }

    // const products = [
    //   { id: 1, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic1 },
    //   { id: 2, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic2 },
    //   { id: 3, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic3 },
    //   { id: 4, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic4 },
    //   { id: 5, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic5 },
    //   { id: 6, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic6 },
    //   { id: 7, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic7 },
    //   { id: 8, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic8 },
    //   { id: 9, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic9 },
    //   { id: 10, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic10 },
    //   { id: 11, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic11 },
    //   { id: 12, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic12 },
    //   { id: 13, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic13 },
    //   { id: 14, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic14 },
    //   { id: 15, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic15 },
    //   { id: 16, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic16 },
    //   { id: 17, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic17 },
    //   { id: 18, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic18 },
    //   { id: 19, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic19 },
    //   { id: 20, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic20 },
    //   { id: 21, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic21 },
    //   { id: 22, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic22 },
    //   { id: 23, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic23 },
    //   { id: 24, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic24 },
    //   { id: 25, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic25 },
    //   { id: 26, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic26 },
    //   { id: 27, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic27 },
    //   { id: 28, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic28 },
    //   { id: 29, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic29 },
    //   { id: 30, name: 'Nike 1 Air Mid 07', catogery: `Men's`, price: 100, image: pic30 },
    // ];
  
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

          {
        product.map((product) => (
            <div key={product._id}>
              <Link href={`/product/${product.slug?.current}`}>
                {product.productName}
                {product.image && ( 
                <Image src={urlFor(product.image).url()} 
                alt={product.productName} 
                width={200} height={200} 
                className='p-4 border rounded-lg shadow-md hover:shadow-lg' />
                )}
                <p>{product.price}</p>
                
                <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg
                hover:scale-110 transition-transform duration-300 ease-in-out' onClick={(e) => handleAddtoCart(e, product)}>Add to Cart</button>
                </Link>
              </div>  
        ))
      }
                  
                
              </div>
            
          </div>
        </div>
    );
  }
  