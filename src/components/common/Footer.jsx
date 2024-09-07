"use client";

import Image from "next/image";
import Link from "next/link";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTiktok,
	FaLinkedin,
} from "react-icons/fa";
import {
	SiVisa,
	SiMastercard,
	SiAmericanexpress,
	SiDiscover,
	SiSsl,
} from "react-icons/si"; // Icons for payment methods

const Footer = () => {
	return (
		<footer className="bg-green-50 text-gray-800 dark:bg-gray-900 dark:text-white">
			<div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{/* Branding Section */}
				<div>
					<h2 className="text-2xl font-bold flex items-center">
						<Image
							src="/logo.png"
							alt="Ostad Logo"
							width={100}
							height={60}
							className="mr-2"
						/>
					</h2>
					<p className="mt-2">
						Education website · Computer training school · E-commerce website
					</p>
					{/* <div className="flex mt-2 space-x-2">
            <Image src="/google-play.png" alt="Google Play" className="h-10 cursor-pointer" />
            <Image src="/app-store.png" alt="App Store" className="h-10 cursor-pointer" />
            <Image src="/windows-store.png" alt="Windows Store" className="h-10 cursor-pointer" />
          </div> */}
					<p className="mt-4 font-semibold">
						Stay connected with the community
					</p>
					<div className="flex space-x-3 mt-2">
						<Link href="https://facebook.com/DesignSkillsBD" target="_blank">
							<FaFacebook className="h-6 w-6 cursor-pointer" />
						</Link>
						<Link href="https://instagram.com/designskillsbd/" target="_blank">
							<FaInstagram className="h-6 w-6 cursor-pointer" />
						</Link>
						<Link href="https://youtube.com/@DesignSkillsBD?sub_confirmaction=1" target="_blank">
							<FaYoutube className="h-6 w-6 cursor-pointer" />
						</Link>
						<FaTiktok className="h-6 w-6 cursor-pointer" />
						<FaLinkedin className="h-6 w-6 cursor-pointer" />
					</div>
				</div>

				{/* Quick Links Section */}
				<div>
					<h3 className="font-semibold text-lg mb-4">Quick Link</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:underline">
								Upcoming Live Batch
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Free Courses
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Live Workshop
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Blog
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h3 className="font-semibold text-lg mb-4">Contacts</h3>

					<p>
						<a
							href="mailto:designskillsbd@gmail.com"
							className="hover:underline"
						>
							designskillsbd@gmail.com
						</a>
					</p>
					<p>
						<a
							href="tel:+8801606591122"
							className="hover:underline"
						>
							+8801606591122
						</a>
					</p>
					<p className="mt-2">{`New Market Sirajganj Sadar, Sirajganj, Bangladesh`}</p>
				</div>

				{/* Company Section */}
				<div>
					<h3 className="font-semibold text-lg mb-4">Company</h3>
					<ul className="space-y-2">
						<li>
							<a href="#" className="hover:underline">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Refund Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Terms And Conditions
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Payment Methods and SSL Icons */}
			<div className="mt-8 border-t py-3 border-gray-200 dark:border-gray-600 flex flex-wrap pl-4 sm:pl-0 sm:justify-center items-center">
			<h3>Design and Developed by <a href="https://gausalmunirtushar.xyz" target="_blank" rel="noopener noreferrer" className=" font-semibold">Gaus Al Munir Tushar</a></h3>
			</div>
		</footer>
	);
};

export default Footer;
