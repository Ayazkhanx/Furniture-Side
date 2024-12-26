import React from 'react'
import pic from '../../public/3.27.png'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className='p-10 items-center'>
      <div className='flex gap-8'>
        {/* Image */}
        <div className='flex-shrink-0'>
          <img src="3.27.png" alt="Nike Air Force 1 PLT.AF.ORM" className='rounded-md h-auto' />
        </div>

        {/* Text */}
        <div className='flex-grow px-10 '>
          <h1 className='text-6xl font-bold mb-8'>Nike Air Force 1 PLT.AF.ORM</h1>
          <p className='mb-4 text-1xl'>
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction,
            including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.
            Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture
            of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          <p className='font-semibold text-2xl mb-4'>&#x20A8; 8,699.00</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
