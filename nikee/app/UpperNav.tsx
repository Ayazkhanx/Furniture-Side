import React from 'react'

export default function UpperNav() {
  return (
    <div className='flex h-12 items-center bg-[#e5e5e5] justify-between p-5'>
      <div>
        Logo
      </div>
      <div className='flex gap-4 '>
        <h1>Find a store</h1>
        <h1>Help</h1>
        <h1>Join Us</h1>
        <h1>Sign In</h1>
      </div>
    </div>
  )
}
