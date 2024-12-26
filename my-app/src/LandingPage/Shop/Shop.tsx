import { IoIosArrowForward } from 'react-icons/io';
import { RiListSettingsFill } from 'react-icons/ri';
import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { FaTrophy } from 'react-icons/fa';
import { LuBadgeCheck } from 'react-icons/lu';
import { FaShippingFast } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    image: '/home 10.png',
  },
  {
    id: 2,
    name: 'Laviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: '',
    image: '/home 11.png',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Stylish Sofa',
    price: 'Rp 700.000',
    oldPrice: 'Rp 14.000.000',
    image: '/home 12.png',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor Bar tool and table',
    price: 'Rp 500.000',
    oldPrice: '',
    image: '/shop.jpg',
  },
];

export default function Shop() {
  return (
    <div className="p-10">

      {/* Section 1: Header and Breadcrumb */}
      <div className="text-3xl text-black font-bold mt-5 flex flex-col justify-center items-center h-full">
        <img src="/logo.png" alt="Logo" width={150} height={150} />
        <h1>Shop</h1>
        <div className="flex p-10 items-center">
          <p>Home</p>
          <IoIosArrowForward />
          <p className="text-gray-400">Shop</p>
        </div>
      </div>

      {/* Section 2: Filter and Sorting Section */}
      <div className="flex justify-between items-center py-4 px-6 bg-[#F9F1E7] shadow-md rounded-lg mb-10">
        <div className="flex items-center space-x-4">
          <RiListSettingsFill className="text-xl text-gray-600" />
          <h1 className="text-lg font-semibold">Filter</h1>
          <HiMiniSquares2X2 className="text-xl text-gray-600" />
          <h1 className="text-sm text-gray-500">Showing 1–16 of 32 results</h1>
        </div>
        <div className="flex items-center space-x-4">
          <h1 className="text-sm text-gray-600">Show</h1>
          <select className="border p-2 text-sm rounded-md">
            <option>16</option>
            <option>32</option>
            <option>64</option>
          </select>
          <h1 className="text-sm text-gray-600">Sort by</h1>
          <select className="border p-2 text-sm rounded-md">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Section 3: Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {products.map((product) => (
          <div key={product.id} className="border p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="mt-auto">
              <h1 className="text-xl font-bold">{product.price}</h1>
              {product.oldPrice && (
                <p className="line-through text-gray-500 text-sm">{product.oldPrice}</p>
              )}
            </div>
          </div>
        ))}
      </div>

       {/* Section 5: Featured Products */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {products.map((product) => (
          <div key={product.id} className="border p-4 flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="mt-auto">
              <h1 className="text-xl font-bold">{product.price}</h1>
              {product.oldPrice && (
                <p className="line-through text-gray-500 text-sm">{product.oldPrice}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Section 4: Info Cards (High Quality, Warranty, etc.) */}
      <div className="flex flex-col md:flex-row justify-between p-10 rounded-lg mb-10" style={{ backgroundColor: '#FAF3EA' }}>
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <FaTrophy className="text-4xl text-gold" />
          <div>
            <h4 className="text-xl font-semibold">High Quality</h4>
            <p className="text-sm text-gray-600">Crafted from top material</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <LuBadgeCheck className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">Warranty Protection</h4>
            <p className="text-sm text-gray-600">Over 2 Years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <FaShippingFast className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">Free Shipping</h4>
            <p className="text-sm text-gray-600">Order Over $150</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <RiCustomerService2Fill className="text-4xl" />
          <div>
            <h4 className="text-xl font-semibold">24 / 7 Support</h4>
            <p className="text-sm text-gray-600">Dedicated Support</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
