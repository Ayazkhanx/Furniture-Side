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

export default function Page() {

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
        
  return (

    <div className='max-w-6xl mx-auto px-4 py-8' >
      <h1 className='text-2xl font-bold mb-6 text-center'> Our Latest Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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
                hover:scale-110 transition-transform duration-300 ease-in-out' 
                onClick={(e) => handleAddtoCart(e, product)}>Add to Cart</button>
                </Link>
              </div>  
        ))
      }
      </div>
    </div>
  )
}