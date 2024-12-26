import asgard from '../../../public/0.10.png'

export default function HomeSec4() {
  return (
    <div className='grid grid-cols-1 bg-[#FFF9E5]'>
      <div className='col-span-8'>
        <img src={asgard} alt="" />
      </div>

      <div className='col-span-4'>
        <h1>New Arrivals</h1>
        <h1 className='text-4xl'>Asgaard sofa</h1>

      </div>
    </div>
  )
}
