import React from 'react'
import Link from 'next/link'

export default function UpperNav() {
  return (
    <div className='flex justify-center bg-black text-white h-12 items-center'>
        <h1>Sign up and get 20% off to your first order.</h1>
        <Link href={'signup'}> <h1 className='underline'>Sign Up Now</h1></Link>
        
    </div>
  )
}
