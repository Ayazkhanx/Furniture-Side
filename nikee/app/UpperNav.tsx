import React from 'react'
import logo from '../public/Vector.png'
import Link from 'next/link'
import Image from 'next/image'

export default function UpperNav() {
  return (
    <div className='flex h-12 items-center bg-[#e5e5e5] justify-between p-5'>
      <div>
        <Link href={'/'}>
        <Image src={logo} alt="" />
        </Link>
        
      </div>
      <div className='flex gap-4 '>
        <Link href={'/'}><h1>Find a store</h1></Link>
        <Link href={'help'} ><h1>Help</h1></Link>
        <Link href={'signup'}><h1>Join Us</h1></Link>
        <Link href={'signin'}><h1>Sign In</h1></Link>
      </div>
    </div>
  )
}
