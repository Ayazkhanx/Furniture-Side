'use client'
import { Product } from '@/types/products'
import React, { useEffect, useState} from 'react'
import { getCartItems, updateCartQuantity } from '../action/action'
import Swal from 'sweetalert2'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CartPage() {
    const [cart, setCart] = React.useState<Product[]>([])

    useEffect(() => {
        setCart(getCartItems())
    }, [])

    const handleRemove = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart(cart.filter((item) => item._id !== id))
                Swal.fire('Removed!', 'Your product has been removed.', 'success')
            }
        })
    }

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity)
        setCart(getCartItems())
    }

    const handleIncrement = (id: string) =>  {
        const product = cart.find((item) => item._id === id)
        if (product) {
            handleQuantityChange(id, product.inventory + 1)
        }
    }

    const handleDecrement = (id: string) =>  {
        const product = cart.find((item) => item._id === id)
        if (product && product.inventory > 1) {
            handleQuantityChange(id, product.inventory - 1)
        }
    }

    const calculatedTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.inventory, 0)
    }

    const router = useRouter()
    const handleCheckout = () => {
        Swal.fire({
            title: 'Checkout',
            text: 'Are you sure you want to Proceed?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                Swal.fire('Success!', 'Your order has been Proceed. Check WishList', 'success')
            }
            router.push('/checkout')
            setCart([])
        })
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cart.map((product) => (
                    <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                        <Image 
                            src={urlFor(product?.image).url()} 
                            width={100} 
                            height={100} 
                            alt={product.productName} 
                            className="object-cover rounded-lg mb-4 mx-auto"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{product.productName}</h3>
                            <p className="text-lg text-gray-600">Price: ${product.price}</p>
                            <div className="flex items-center justify-center gap-4 my-4">
                                <button 
                                    onClick={() => handleDecrement(product._id)} 
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                >
                                    -
                                </button>
                                <span className="text-xl font-semibold">{product.inventory}</span>
                                <button 
                                    onClick={() => handleIncrement(product._id)} 
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                onClick={() => handleRemove(product._id)} 
                                className="bg-red-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <h3 className="text-2xl font-bold">Total: ${calculatedTotal().toFixed(2)}</h3>
            </div>
            <button onClick={handleCheckout} className='mt-4 px-4 py-2 w-full
            bg-green-500 hover:bg-green-600 text-white rounded-md'>Proceed</button>
        </div>
    )
}
