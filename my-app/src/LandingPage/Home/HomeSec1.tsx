// import React from 'react'
// import sofa from '../../public/0.1.png'

// export default function HomeSec1() {
//   return (
//     <div className='grid grid-cols-2 items-center bg-#FBEBB5;
// ]'>
//       <div className='justify-between items-center text-center'>
//         <h1 className='text-4xl font-bold'>Rocket single seater</h1>
//         <a href="/shop" className='border-b'>Shop Now</a>
//       </div>

//       <div>
//         <img src={sofa} alt="" />
//       </div>
//     </div>
//   )
// }


import sofa from '../../../public/0.1.png'; 

export default function HomeSec1() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center bg-[#FBEBB5] p-10 m-6'>
      {/* Left Column */}
      <div className='text-center md:text-left'>
        <h1 className='text-4xl font-bold mb-4'>Rocket Single Seater</h1>
        <a href="/shop" className='border-b-2 text-black'> Shop Now </a>
      </div>

      {/* Right Column */}
      <div className='flex justify-center'>
        <img src={sofa} alt="Rocket single seater" className='max-w-full h-auto' />
      </div>
    </div>
  );
}
