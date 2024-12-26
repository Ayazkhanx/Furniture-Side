import pic1 from '../../../public/0.7.jpg'
import pic2 from '../../../public/0.8.jpg'
import pic3 from '../../../public/0.9.jpg'

import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";

export default function HomeSec5() {
  return (
    <div className="grid grid-cols-1 gap-6 m-6">

      {/* Upper Text Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold"> Our Blogs</h1>
        <p>Find a bright ideal to suit your taste with our great selection</p>
      </div>

      {/* Images and Text Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <img src={pic1} alt="pic1" className="w-full h-auto" />
          <h2 className="text-xl font-semibold mt-4">Going all-in with millennial design</h2>
          <a href="" className="text-blue-500 hover:underline mt-2 block">Read More</a>
          <div className="flex justify-center gap-4 mt-2 text-gray-600">
            <div className="flex items-center">
              <GoClock />
              <p className="ml-2">5 min</p>
            </div>
            <div className="flex items-center">
              <CiCalendar />
              <p className="ml-2">Dec 2024</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <img src={pic2} alt="pic2" className="w-full h-auto" />
          <h2 className="text-xl font-semibold mt-4">Going all-in with millennial design</h2>
          <a href="" className="text-blue-500 hover:underline mt-2 block">Read More</a>
          <div className="flex justify-center gap-4 mt-2 text-gray-600">
            <div className="flex items-center">
              <GoClock />
              <p className="ml-2">5 min</p>
            </div>
            <div className="flex items-center">
              <CiCalendar />
              <p className="ml-2">Dec 2024</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <img src={pic3} alt="pic3" className="w-full h-auto" />
          <h2 className="text-xl font-semibold mt-4">Going all-in with millennial design</h2>
          <a href="" className="text-blue-500 hover:underline mt-2 block">Read More</a>
          <div className="flex justify-center gap-4 mt-2 text-gray-600">
            <div className="flex items-center">
              <GoClock />
              <p className="ml-2">5 min</p>
            </div>
            <div className="flex items-center">
              <CiCalendar />
              <p className="ml-2">Dec 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Posts Link */}
      <div className="text-center">
        <a href="" className="text-blue-500 hover:underline">View All Posts</a>
      </div>

    </div>
  );
}
