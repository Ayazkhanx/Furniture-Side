'use client'
import { Product } from "@/types/products"
import { useEffect, useState } from "react"
import React from 'react'
import { getCartItems } from "../action/action"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { client } from "@/sanity/lib/client"
import { FaAngleRight } from "react-icons/fa6";

export default function page() {
    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState(0)
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        city: '',
        postalCode: ''
    })

    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        address: false,
        phone: false,
        city: false,
        postalCode: false
    })

    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem('appliedDiscount')

        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
        }
    }, [])

    const subTotal = cartItems.reduce((total, product) => total + product.price * product.inventory, 0)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const errors = {
            name: !formValues.name,
            email:!formValues.email,
            address: !formValues.address,
            phone: !formValues.phone,
            city: !formValues.city,
            postalCode:!formValues.postalCode,

        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error)
    }

    const handlePlaceOrder = async () => {

        if (validateForm()) {
            localStorage.removeItem('cart')
            localStorage.removeItem('appliedDiscount')
            alert('Order placed successfully')
        } else {
            alert('Please fill in all required fields')
        }

        const orderData = {
            _type: 'order',
            name: formValues.name,
            email: formValues.email,
            address: formValues.address,
            phone: formValues.phone,
            city: formValues.city,
            postalCode: formValues.postalCode,
            items: cartItems.map((item) => ({ 
                _type: 'refrence',
                _ref: product.id
            })),
            discount: discount,
            orderDate: new Date().toISOString
        };
        try {
            await client.create(orderData)
            localStorage.removeItem('appliedDiscount')
        } catch {
            console.log('something wrong in order')
        }

    }
    
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <nav className="flex items-center gap-2 py-6">
                <Link href={'/cart'} className="hover:text-black text-[#666666]">cart</Link>
                <FaAngleRight />
                <span>checkOut</span>
            </nav>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-white space-y-6 border rounded-lg">
            <h1 className="text-lg font-semibold mb-4">Order Summery</h1>
            {
                cartItems.length > 0 ? (
                    cartItems.map((product) => (
                        <div key={product._id} className="flex items-center gap-4 py-3 border-b">
                            <div className="w-16 h-16 overflow-hidden rounded">
                                <Image src={urlFor(product.image).url()} alt={product.productName} 
                                width={100} height={100} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-sm font-medium">{product.productName}</h1>
                                <p className="text-xs text-gray-500">Quantity: {product.inventory}</p>
                            </div>
                            <p>$Price: {product.price * product.inventory}</p>
                            </div>
                    ))
                ) : (
                    <p>No items in the cart</p>
                )}
                <div className="text-right pt-2 text-sm font-medium">
                    <p>SubTotal: <span>${subTotal}</span></p>
                    <p>Discount: <span>${discount}</span></p>
                    <p className="text-lg font-semibold pt-2">Total: <span>${subTotal.toFixed(2)}</span></p>
                </div>
            </div>

            <div className="bg-white border rounded-lg p-6 ">
                <h1 className="text-lg font-semibold justify-center">Billing Information</h1>
                <div className="bg-white rounded-lg p-6 space-y-6">
                    <div className="">
                        <label>Name:</label>
                        <input type="text" name="name" value={formValues.name} onChange={handleInputChange} placeholder="Enter Your Name"/>
                        {formErrors.name && <p className="text-red-500">Name is required</p>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={formValues.email} onChange={handleInputChange} placeholder="Enter Your Email"/>
                        {formErrors.email && <p className="text-red-500">Email is required</p>}
    
                </div>

                <div>
                        <label>Address:</label>
                        <input type="text" name="address" value={formValues.address} onChange={handleInputChange} placeholder="Enter Your Address"/>
                        {formErrors.address && <p className="text-red-500">Address is required</p>}
        
            </div>    

            <div>
                        <label>Phone:</label>
                        <input type="text" name="phone" value={formValues.phone} onChange={handleInputChange} placeholder="Enter Your Phone Number"/>
                        {formErrors.phone && <p className="text-red-500">Phone Number is required</p>} 
                        </div>

                        <div>
                        <label>City:</label>
                        <input type="text" name="city" value={formValues.city} onChange={handleInputChange} placeholder="Enter Your City"/>
                        {formErrors.city && <p className="text-red-500">City is required</p>} 
                        </div>     
                        <div>
                        <label>Postal Code:</label>
                        <input type="text" name="postalCode" value={formValues.postalCode} 
                        onChange={handleInputChange} placeholder="Enter Your Postal Code"/>
                        {formErrors.postalCode && <p className="text-red-500">Postal Code is required</p>} 
                        </div>
                        <button onClick={handlePlaceOrder} 
                        className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white">Place Order</button>
                        </div>
         </div>
        </div>
      </div>
    </div>
  )
}
