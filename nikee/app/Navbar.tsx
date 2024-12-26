import React from 'react'
import Link from 'next/link'
import { IoBagOutline } from "react-icons/io5"
import { CiHeart } from "react-icons/ci";


export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-20 p-5'>
      <div>
        <h1>Logo</h1>
      </div>

      <div className='flex font-bold gap-4'>
        <Link href={''}>New & Featured</Link>
        <Link href={''}>Man</Link>
        <Link href={''}>Women</Link>
        <Link href={''}>Kids</Link>
        <Link href={''}>Sale</Link>
        <Link href={''}>SNKRS</Link>
      </div>

      <div className='flex gap-2'>
        <input type="text"  className='bg-gray-300'/>
        <CiHeart />
        <IoBagOutline />

      </div>
    </div>
  )
}
