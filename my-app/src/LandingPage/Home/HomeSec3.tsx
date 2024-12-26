
import sofa1 from '../../../public/0.4.png';
import sofa2 from '../../../public/0.5.png';
import sofa3 from '../../../public/0.11.png';
import sofa4 from '../../../public/0.12.png';

export default function HomeSec3() {
  return (
    <div className='grid grid-cols-1 gap-6 m-6'>
      {/* First Row - Text Section */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Top Picks For You</h1>
        <p className='mt-4 text-lg'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>

      {/* Second Row - Images */}
      <div className='grid grid-cols-4 items-center justify-center gap-2'>
        <div>
          <img src={sofa1} alt="Sofa 1" className='w-full h-auto' />
        </div>
        <div>
          <img src={sofa2} alt="Sofa 2" className='w-full h-auto' />
        </div>
        <div>
          <img src={sofa3} alt="Sofa 3" className='w-full h-auto' />
        </div>
        <div>
          <img src={sofa4} alt="Sofa 4" className='w-full h-auto' />
        </div>
      </div>

      {/* Third Row - View More Link */}
      <div className='text-center'>
        <a href="/shop" className='text-black text-lg font-semibold'>
          View More
        </a>
      </div>
    </div>
  );
}
