// 'use client'
// import { addtoCart } from "@/app/action/action"
// import { Button } from "@/components/ui/button"
// import { client } from "@/sanity/lib/client"
// import { urlFor } from "@/sanity/lib/image"
// import { Product } from "@/types/products"
// import { groq } from "next-sanity"
// import Image from "next/image"
// import Link from "next/link"
// import { MouseEvent, useState } from "react"
// import Swal from "sweetalert2"


// interface ProductPageProps{
//     params : Promise<{ slug: string }>
// }

// async function getProduct(slug: string): Promise<Product> {

        
//     return client.fetch(
//      groq `*[_type == "product" && slug.current == $slug][0] {
//         _id,
//         productName,
//         _type,
//         price,
//         image,
//         description,
//     }`, { slug }
//     )
// } 

//     export default async function ProductPage({ params }: ProductPageProps) {
//         const { slug } = await params;
//         const product = await getProduct(slug)

//         function handleAddtoCart(e: MouseEvent<HTMLButtonElement, MouseEvent>, product: Product): void {
//             throw new Error("Function not implemented.")
//         }

//         return (
//             // <div className="max-w-7xl mx-auto px-4">
//             //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             //         <div className="aspect-square">
//             //             {
//             //                 product?.image && (
//             //                     <Image 
//             //                     src={urlFor(product.image).url()}
//             //                     alt={product.productName}
//             //                     width={500} height={500}
//             //                     className='rounded-lg shadow-md' 
//             //                     />
//             //                 )
//             //             }
//             //         </div>
//             //         <div className="flex flex-col gap-8">
//             //             <h1 className="font-bold text-4xl">
//             //                 {product?.productName}
//             //             </h1>
//             //             <p className="text-2xl font-sans">
//             //                 {product?.price}
//             //             </p>
//             //         </div>
//             //     </div>
//             // </div>


//             <div className='p-10 items-center'>
//       <div className='flex gap-8 flex-col lg:flex-row'>
//         {/* Image */}
//         <div className='flex-shrink-0'>
//           <Image src={urlFor(product.image).url()} alt="Nike Air Force 1 PLT.AF.ORM" 
//           width={500} height={500} className='rounded-md h-auto' />
//         </div>

//         {/* Text */}
//         <div className='flex-grow px-10 '>
//           <h1 className='lg:text-6xl font-bold text-4xl mb-8'>{product.productName}</h1>
//           <p className='mb-4 text-1xl'> {product.description} </p>
//           <p className='font-semibold text-2xl mb-4 text-blue-500'>&#x20A8; {product.price} </p>
//           <Button className="bg-black text-white font-semibold" 
//           onClick={(e) => handleAddtoCart(e, product)}>Add to Cart</Button>
//             </div>
//       </div>
//     </div>
//         )
//     }











'use client'
import { addtoCart } from "@/app/action/action"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Product } from "@/types/products"
import { groq } from "next-sanity"
import Image from "next/image"
import { MouseEvent, useState, useEffect } from "react"
import Swal from "sweetalert2"

interface ProductPageProps {
    params: Promise<{ slug: string }>
}

const ProductPage = ({ params }: ProductPageProps) => {
    const [product, setProduct] = useState<Product | null>(null)

    // Fetch the product data based on the slug
    useEffect(() => {
        const fetchProduct = async () => {
            const { slug } = await params
            const fetchedProduct = await client.fetch(
                groq`*[_type == "product" && slug.current == $slug][0] {
                    _id,
                    productName,
                    _type,
                    price,
                    image,
                    description,
                }`, { slug }
            )
            setProduct(fetchedProduct)
        }
        fetchProduct()
    }, [params])

    // Handle adding to the cart
    const handleAddtoCart = (e: MouseEvent, product: Product) => {
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

    
    if (!product) {
        return <div>Loading...</div>
    }

    return (
        <div className='p-10 items-center'>
            <div className='flex gap-8 flex-col lg:flex-row'>
                {/* Image */}
                <div className='flex-shrink-0'>
                    <Image src={urlFor(product.image).url()} alt={product.productName} 
                        width={500} height={500} className='rounded-md h-auto' />
                </div>

                
                <div className='flex-grow px-10'>
                    <h1 className='lg:text-6xl font-bold text-4xl mb-8'>{product.productName}</h1>
                    <p className='mb-4 text-1xl'> {product.description} </p>
                    <p className='font-semibold text-2xl mb-4 text-blue-500'>&#x20A8; {product.price} </p>
                    <Button className="bg-black text-white font-semibold"
                        onClick={(e) => handleAddtoCart(e, product)}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
