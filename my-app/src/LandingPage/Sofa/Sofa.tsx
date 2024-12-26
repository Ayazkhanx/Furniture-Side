import { IoIosArrowForward } from "react-icons/io";
// import { RiListSettingsFill } from "react-icons/ri";
// import { HiMiniSquares2X2 } from "react-icons/hi2";

// Import images
// import pic1 from '../public/shop 2.png';
// import pic2 from '../public/shop 4.png';
// import pic3 from '../public/shop 5.png';
// import pic4 from '../public/shop 9.png';
// import pic5 from '../public/shop 7.png';
// import pic6 from '../public/shop 8.png';

// Related products data
const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: 'Rp 3.500.000',
    image: '/home 10.png', // Path to image in public folder
  },
  {
    id: 2,
    name: 'Laviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    oldPrice: '',
    image: '/home 11.png', // Path to image in public folder
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Stylish Sofa',
    price: 'Rp 700.000',
    oldPrice: 'Rp 14.000.000',
    image: '/home 12.png', // Path to image in public folder
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor Bar tool and table',
    price: 'Rp 500.000',
    oldPrice: '',
    image: '/shop.jpg', // Path to image in public folder
  },
];

export default function Sofa() {
  return (
    <div className="space-y-16">

      {/* First Section: Product Details (SofaSec1) */}
      <div className="container mx-auto p-4">
        {/* First Row: Navigation */}
        <div className="flex items-center space-x-2 w-full h-12 bg-[#F9F1E7] mb-6">
          <h1 className="text-xl">Home</h1>
          <IoIosArrowForward />
          <h1 className="text-xl">Shop</h1>
          <IoIosArrowForward />
          <h1 className="text-xl">Asgard Sofa</h1>
        </div>

        {/* Second Row: Images and Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div>
            <div className="mb-4">
              <img src='shop 2.png' alt="Main Sofa" className="w-full rounded-lg" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <img src='shop 4.png' alt="Sofa Thumbnail 1" className="w-full h-24 object-cover rounded-lg" />
              <img src='shop 5.png' alt="Sofa Thumbnail 2" className="w-full h-24 object-cover rounded-lg" />
              <img src='shop 9.png' alt="Sofa Thumbnail 3" className="w-full h-24 object-cover rounded-lg" />
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <h1 className="text-2xl font-semibold mb-4">Asgaard Sofa</h1>
            <p className="text-xl font-bold mb-4">Rs 250,000.00</p>
            <p className="text-lg text-gray-700 mb-6">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound.
            </p>
            <ul className="flex space-x-4 mb-6">
              <li className="text-lg">L</li>
              <li className="text-lg">XL</li>
              <li className="text-lg">SM</li>
            </ul>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">1</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-500">Add to Cart</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400">+ Compare</button>
            </div>
            <hr className="my-6 border-t-2 border-gray-300" />
          </div>
        </div>
      </div>

      {/* Second Section: Product Description (SofaSec2) */}
      <div className="container mx-auto p-10">
        {/* Navigation Section */}
        <div className="flex space-x-8 mb-8">
          <h1 className="text-xl font-semibold cursor-pointer hover:text-blue-500">Description</h1>
          <h1 className="text-xl font-semibold cursor-pointer hover:text-blue-500">Additional Information</h1>
          <h1 className="text-xl font-semibold cursor-pointer hover:text-blue-500">Reviews [5]</h1>
        </div>

        {/* Product Description */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
            unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar
            as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced
            audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The
            analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced
            leather strap enables easy and stylish travel.
          </p>
        </div>

        {/* Product Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src='shop 7.png' alt="Sofa Image 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src='shop 8.png' alt="Sofa Image 2" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Third Section: Related Products (HomeSec2) */}
      <div className="p-10">
        <div>
          <h2 className="flex justify-center text-4xl font-bold mb-4">Related Products</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <div className="mt-2">
                <h1 className="text-xl font-bold">{product.price}</h1>
                {product.oldPrice && (
                  <p className="line-through text-gray-500">{product.oldPrice}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4 text-black">
          <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded-lg hover:bg-blue-600">Show More</button>
        </div>
      </div>
    </div>
  );
}
