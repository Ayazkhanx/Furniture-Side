import React from 'react'
import Link from 'next/link'
import { IoBagOutline } from "react-icons/io5"
import { CiHeart } from "react-icons/ci";
import logo from '../public/Vector (1).png'


export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-20 p-5'>
      <div>
        <img src="Vector (1).png" alt="" />
      </div>

      <div className='flex font-bold gap-4'>
        <Link href={''}>New & Featured</Link>
        <Link href={''}>Man</Link>
        <Link href={''}>Women</Link>
        <Link href={''}>Kids</Link>
        <Link href={''}>Sale</Link>
        <Link href={''}>SNKRS</Link>
      </div>

      <div className='flex gap-2 items-center'>
        <input type="text" placeholder='Search Here' className='bg-gray-200 h-10 w-64 rounded-lg'/>
        <CiHeart />
        <IoBagOutline />

      </div>
    </div>
  )
}
