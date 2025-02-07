'use client'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { allProducts } from '@/sanity/lib/queries'
import { Product } from '@/types/products'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
        
  return (
    <div className='mx-auto max-w-6xl px-4 py-8' >
      {
        product.map((product) => (
            <div key={product._id}>
                {product.title}
                {product.image && ( 
                  
                  <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  width={100}
                  height={100}
                  className='object-cover mb-4' />
                )}
                {product.price}
            </div>
        ))
      }
    </div>
  )
}
