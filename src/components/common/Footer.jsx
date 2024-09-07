'use client'

import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from "react-icons/fa";
import { SiVisa, SiMastercard, SiAmericanexpress, SiDiscover, SiSsl } from "react-icons/si"; // Icons for payment methods

const Footer = () => {
  return (
    <footer className="bg-[#fbf5e8] text-gray-800 py-10 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
		  <Image src="/logo.png" alt="Ostad Logo" width={100} height={60} className="mr-2" />
          </h2>
          <p className="mt-2">Online Live Skill Development Platform</p>
          <h3 className="mt-4 font-semibold">Download Ostad App</h3>
          {/* <div className="flex mt-2 space-x-2">
            <Image src="/google-play.png" alt="Google Play" className="h-10 cursor-pointer" />
            <Image src="/app-store.png" alt="App Store" className="h-10 cursor-pointer" />
            <Image src="/windows-store.png" alt="Windows Store" className="h-10 cursor-pointer" />
          </div> */}
          <p className="mt-4 font-semibold">Stay connected with the community</p>
          <div className="flex space-x-3 mt-2">
            <FaFacebook className="h-6 w-6 cursor-pointer" />
            <FaInstagram className="h-6 w-6 cursor-pointer" />
            <FaYoutube className="h-6 w-6 cursor-pointer" />
            <FaTiktok className="h-6 w-6 cursor-pointer" />
            <FaLinkedin className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Upcoming Live Batch</a></li>
            <li><a href="#" className="hover:underline">Free Courses</a></li>
            <li><a href="#" className="hover:underline">Live Workshop</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contacts</h3>
          <p><a href="mailto:support@ostad.app" className="hover:underline">support@ostad.app</a></p>
          <p className="mt-2">{`Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212`}</p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms And Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Payment Methods and SSL Icons */}
      <div className="mt-8 border-t border-gray-300 pt-6 flex flex-wrap justify-center items-center space-x-4">
        {/* <SiVisa className="h-8 w-8" />
        <SiMastercard className="h-8 w-8" />
        <SiAmericanexpress className="h-8 w-8" />
        <SiDiscover className="h-8 w-8" />
        {/* Add other icons as needed */}
        {/* <SiSsl className="h-8 w-8" /> */}
      </div>
    </footer>
  );
};

export default Footer;
