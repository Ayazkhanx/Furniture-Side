import React from "react";

export default function Footer() {
  return (
    <div className="mb-0 sticky text-center bg-[#f0f0f0] p-6">
      {/* Main grid structure for the footer content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Column 1: Shop.co Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">SHOP.CO</h1>
          <p>We have clothes that suit your style and which you’re proud to wear. From women to men.</p>
        </div>

        {/* Column 2: Company Links */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Company</h1>
          <p>About</p>
          <p>Features</p>
          <p>Work</p>
          <p>Career</p>
        </div>

        {/* Column 3: Help Links */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Help</h1>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        {/* Column 4: FAQ Links */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">FAQ</h1>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>

        {/* Column 5: Resources Links */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Resources</h1>
          <p>Free eBooks</p>
          <p>Development Tutorials</p>
          <p>How to Blog</p>
          <p>YouTube Playlist</p>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="my-4" />

      {/* Footer bottom with text */}
      <div className="flex justify-between items-center">
        <p className="text-start">SHOP.CO 2020 to 2024. All rights reserved.</p>
        <div>
          {/* You can add social media icons or other footer actions here */}
        </div>
      </div>
    </div>
  );
}
