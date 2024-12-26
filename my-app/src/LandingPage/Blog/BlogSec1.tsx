import { IoIosArrowForward } from "react-icons/io";


export default function BlogSec1() {
  return (
         <div>
               {/* Section 1: Blog Header */}
               <div className="p-10 bg-cover bg-center h-[500px]" style={{ backgroundImage: `url('/shop 1.jpg')` }}>
                <div className="text-center text-3xl text-black font-bold flex flex-col justify-center items-center h-full">
                  {/* <Image src={logo} alt="Logo" width={150} height={150} /> Logo */}
                  <h1>Blog</h1>
                  <div className="flex items-center mt-5 space-x-2">
                    <p>Home</p>
                    <IoIosArrowForward />
                    <p className="text-gray-400">Blog</p>
                  </div>
                </div>
              </div>
            </div>
  )
}
