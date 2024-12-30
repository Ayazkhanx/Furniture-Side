import React from 'react'
import Image from 'next/image'
import logo from '../../public/Vector (1).png'

export default function Example() {
    return (
      <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 border py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex items-center justify-center">
            <Image src={logo} alt="" />
            </div>
            <h2 className="mt-10 text-center text-2xl/9 font-extrabold tracking-tight text-gray-900">
            BECOME A NIKE MEMBER
            </h2>
            <p className="text-gray-500 pt-6 text-center">Create your Nike Member profile and get first access to the very best of Nike products, inspiration 
                and community.</p>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>

              <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    required
                    autoComplete="firstname"
                    placeholder="FirstName"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
                    text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 
                    placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 
                    focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    required
                    autoComplete="lastname"
                    placeholder="LastName"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
                    text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 
                    placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 
                    focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="dateofbirth"
                    name="dateofbirth"
                    type="number"
                    required
                    autoComplete="dateofbirth"
                    placeholder="Date of Birth"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
                    text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 
                    placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 
                    focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
                    text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 
                    placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 
                    focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="password"
                    placeholder="Password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base 
                    text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 
                    placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 
                    focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>

              </div>
              <div>

                <div className="flex justify-center items-center px-10">
                    <h1 className="text-gray-500 ">Sign up for emails to get updates from Nike on products, 
                    offers and your Member benefits</h1>
                </div>

                <div className="flex justify-center items-center py-4 px-11 text-gray-500">
                    <h1>By logging in, you agree to Nike`s <span className="underline"> Privacy Policy</span>and 
                    <span className="underline">Terms of Use.</span> </h1>
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already member?{' '}
              <a href="signin" className="font-semibold text-gray-500 underline">
                Login Now
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  