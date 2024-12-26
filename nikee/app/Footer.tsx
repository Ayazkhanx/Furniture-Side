import React from 'react'
import Link from 'next/link'
import { FiFacebook } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <div className='grid-rows-2 bg-black text-white  p-10'>

    <div className='flex grid-rows-1 lg:grid-cols-2 text-gray-300 sm:grid-cols-1 justify-between'>
      <div className='grid-cols-1 flex gap-4 '>
        <div className='gap-2 grid'>
            <Link href={''} className='text-white font-bold'>FIND A STORE</Link>
            <Link href={''}>BECOME A MEMBER</Link>
            <Link href={''}>SIGNUP FOR EMAIL</Link>
            <Link href={''}>SEND US A FEEDBACK</Link>
            <Link href={''}>STUDENT DISCOUNT</Link>
        </div>

        <div className='gap-4 grid'>
            <h1 className='text-white font-bold'>GET HELP</h1>
            <p>order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Contact us on Nike.com Inquires</p>
            <p>Contactus on All Inquires</p>
        </div>
        <div className='gap-4 grid'>
            <h1 className='text-white font-bold'>ABOUT NIKE</h1>
            <p>News</p>
            <p>Career</p>
            <p>Investors</p>
            <p>Sustainablity</p>
        </div>
      </div>

      <div className='grid-cols-1 flex gap-4'>
        <FiFacebook />
        <FiTwitter />
        <FaInstagram />
      </div>
    </div>
    <hr />

    <div className='flex justify-between text-gray-300 items-center mt-6'>
        <div className='flex gap-4'>
        <CiLocationOn  />
        <h1 className='text-white'>Pakistan</h1>
        <p>Copyright 2024 Nike. All Rights Reserved</p>
        </div>
       
       <div className='flex gap-4 '>
        <h1>Guides</h1>
        <h1>Terms of Sale</h1>
        <h1>Terms of Use</h1>
        <h1>New Privacy Policy</h1>
       </div>
    </div>
    </div>
  )
}