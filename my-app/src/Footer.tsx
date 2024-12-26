// import { BiMailSend } from "react-icons/bi";
// import gplay from '../public/g play.png';
// import appstore from '../public/App store.png';
// import QR from '../public/QR Code.jpg';

export default function Footer() {
  return (
    <div className="mb-0 sticky p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Funiro Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Funiro</h1>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        {/* Column 2: Links */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Links</h1>
          <p> <a href="/">Home</a></p>
          <p><a href="/shop">Shop</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/contact">Contact</a></p>
        </div>

        {/* Column 3: Help */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Help</h1>
          <p>Payment Option</p>
          <p>Returns</p>
          <p>Privacy Policy</p>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div className="space-y-4 items-center ">
          <h1 className="text-xl font-semibold">News Letter</h1>
          <div className="flex">
          <input type="text" className="bg-gray-400"/> 
          <p>Subscribe </p>
          </div>
         
          </div>
      </div>
      <hr />
      <div>
        <p className="text-start p-6">Copyright 2022 Funiro. All rights reserved.</p>
      </div>
    </div>
  );
}
