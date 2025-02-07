import React from 'react'
import Link from 'next/link'
import { IoBagOutline } from "react-icons/io5"
import { CiHeart } from "react-icons/ci";
import logo from '../public/Vector (1).png'
import Image from 'next/image';


export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-20 p-5'>
      <div>
        <Link href={'/'}><Image src={logo} alt="" /></Link>
      </div>

      <div className='flex font-bold gap-4'>
        <Link href={''}>New & Featured</Link>
        <Link href={'men'}>Man</Link>
        <Link href={'women'}>Women</Link>
        <Link href={'kids'}>Kids</Link>
        <Link href={''}>Sale</Link>
        <Link href={''}>SNKRS</Link>
      </div>

      <div className='flex gap-4 items-center justify-center'>
        <input type="text" placeholder='Search Here' className=' h-9 p-2 w-64 rounded-xl'/>
        <Link href={'wishlist'}><CiHeart className='size-4'/></Link>
        <Link href={'cart'}><IoBagOutline /></Link>

      </div>
    </div>
  )
}
