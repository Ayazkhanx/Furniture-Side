// import table from '../../public/0.2.png'
// import sofa from '../../public/0.3.png'

// export default function HomeSec2() {
//   return (
//     <div className='grid grid-cols-2 m-6 items-center bg-[#FAF4F4]'>
//         <div className='grid-cols-1'>
//             <img src={table} alt="" />
//             <h2 className='text-3xl'>Side Table </h2>
//             <a href="/shop">View More</a>
//         </div>

//         <div className='grid-cols-1'>
//         <img src={sofa} alt="" />
//             <h2 className='text-3xl'>Side Table </h2>
//             <a href="/shop">View More</a>
//         </div>
      
//     </div>
//   )
// }




import table from '../../../public/0.2.png';
import sofa from '../../../public/0.3.png';

export default function HomeSec2() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 m-6 items-center bg-[#FAF4F4]'>
      {/* Side Table Section */}
      <div className='text-center'>
        <img src={table} alt="Side Table" className='mx-auto' />
        <h2 className='text-3xl mt-4'>Side Table</h2>
        <a href="/shop" className='text-blue-500 hover:text-blue-700 mt-2 block'>
          View More
        </a>
      </div>

      {/* Sofa Section */}
      <div className='text-center'>
        <img src={sofa} alt="Sofa" className='mx-auto' />
        <h2 className='text-3xl mt-4'>Sofa</h2>
        <a href="/shop" className='text-blue-500 hover:text-blue-700 mt-2 block'>
          View More
        </a>
      </div>
    </div>
  );
}
