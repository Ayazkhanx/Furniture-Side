import { Button } from '@/components/ui/button'
import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { ImMobile } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function page() {
  return (
    <div className='p-10 '>
  
      <div className='grid justify-center items-baseline mb-8'>
        <h1 className='text-4xl '>GET HELP</h1>
        <input type="text" className='border border-black bg-gray-100 rounded' />
      </div>

      {/* Second Row - Main Content (8 columns) and Sidebar (4 columns) */}
      <div className='grid grid-cols-12 gap-4 pt-6'>
        {/* Main Content (8 columns) */}
        <div className='col-span-12 lg:col-span-8'>
          <div className='grid gap-4'>
            <h1 className='text-3xl font-bold'>`WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?`</h1>
            <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the 
                following payment options:</p>

            <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
            <p>If you enter your PAN information at checkout, you`ll be able to pay for your order with PayTM 
                or a local credit or debit card.</p>

            <button className='border p-2 rounded mb-4 bg-black text-white'>Apply Now</button>

            <div className='grid gap-4'>
              <div className='flex'>
                <span className='font-bold'>Nike Members </span> <h1> can store multiple debit or credit cards 
                in their profile for faster checkout. If you`re not already a Member, join us today.</h1>
              </div>

              <div className='flex gap-4'>
                <Button className='rounded-md bg-black text-white'>JOIN US</Button>
                <Button className='rounded-md  bg-black text-white'>SHOP NIKE</Button>
              </div>
            </div>

            <div>
              <h1 className='font-bold text-lg'> FAQ`S</h1>

              <div>
                <h1> <span>Does my card need international purchases enabled?</span>
                  Yes, we recommend asking your bank to enable international purchases on your card. You will 
                  be notified at checkout if international purchases need to be enabled.
                </h1>
              </div>
              <h1>Please note, some banks may charge a small transaction fee for international orders.</h1>
            </div>

            <div>
              <h1><span>Can I pay for my order with multiple methods?</span>
                No, payment for Nike orders can`t be split between multiple payment methods.</h1>
            </div>

            <div>
              <h1><span>What payment method is accepted for SNKRS orders?</span>
                You can use any accepted credit card to pay for your SNKRS order.</h1>
            </div>

            <div>
              <h1><span>Why don`t I see Apple Pay as an option?</span>
                To see Apple Pay as an option in the Nike App or on Nike.com, you`ll need to use a 
                compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in 
                your Wallet. Additionally, you`ll need to use Safari to use Apple Pay on Nike.com.
              </h1>
            </div>

            <div>
              <h1>Was this answer helpful?</h1>
              <div className='flex gap-4'>
                <AiFillLike />
                <AiFillDislike />
              </div>

              <div>
                <h1>RELATED</h1>
                <h1>WHAT ARE NIKE`S DELIVERY OPTIONS?</h1>
                <h1>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (4 columns for contact info, mobile icons, etc.) */}
        <div className='lg:col-span-4 col-span-12'>
  <div className='grid gap-6 px-4'>
    {/* Mobile Number Section */}

    <div>
        <h1 className='text-center font-bold text-3xl'> CONTACT US</h1>
    </div>
    <div className='grid items-center justify-center text-center'>
      <ImMobile className='text-6xl text-black' /> 
      </div>
      <div className='text-center'>
        <h1 className='text-xl  font-semibold'>000 800 919 0566</h1>
        <p className='text-sm text-gray-600 '>
          Products & Orders: 24 hours a day, 7 days a week<br />
          Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
        </p>
    </div>

    {/* Message Section */}
    <div className='grid items-center justify-center text-center'>
      <RiMessage2Fill className='text-6xl text-black' /> 
      </div>
      <div className='mt-4 text-center'>
        <h1 className='text-xl font-semibold'>24 hours a day</h1>
        <h1 className='text-xl font-semibold'>7 days a week</h1>
    </div>

    {/* Email Section */}
    <div className='grid items-center justify-center text-center'>
        
      <MdEmail className='text-6xl text-black' /> 
      </div>
      <div className='mt-4 text-center'>
        <h1 className='text-xl font-semibold'>We will reply in five business days</h1>
      </div>
    

    {/* Store Locator Section */}
    <div className='grid items-center justify-center text-center'>
      <FaLocationDot className='text-6xl text-black' />
      </div>
      <div className='mt-4 text-center'>
        <h1 className='text-xl font-semibold'>STORE LOCATOR</h1>
        <h1 className='text-sm text-gray-600'>Find Nike retail stores near you</h1>
      
    </div>
  </div>
</div>

    </div>
    </div>
)}