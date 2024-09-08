"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const currentTheme = theme || "light"; // Default to 'light' if undefined

	const navLinks = [
		// { href: "#", text: "SPECIAL OFFER", icon: <FaStar className="text-green-500 mr-1" /> },
		{ href: "/courses", text: "Courses" },
		{ href: "/services", text: "Services" },
		{ href: "/about", text: "About Us" },
		{ href: "/blog", text: "Blog" },
	];

	const buttonLinks = [
		{
			text: "LOGIN/SIGNUP",
			bgColor: "bg-green-500",
			hoverColor: "hover:bg-green-400",
		},
	];

	const toggleDarkMode = () => {
		console.log("Current theme:", currentTheme);
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		console.log("New theme:", newTheme);
	};

	return (
		<header
			className={`w-full px-4 py-3 border-b ${
				currentTheme === "dark"
					? "border-gray-700 bg-gray-900"
					: "border-gray-200 bg-white"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between gap-4">
				{/* Logo Section */}
				<div className="flex items-center space-x-2 px-2">
					<Image
						src="/logo.png"
						alt="Design Skills BD Logo"
						width={120}
						height={40}
					/>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden flex items-center">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle Menu"
					>
						{isMenuOpen ? (
							<MdClose size={24} />
						) : (
							<CiMenuFries size={24} />
						)}
					</button>
				</div>

				{/* Navigation Links */}
				<nav
					className={`md:flex md:space-x-4 ${
						isMenuOpen ? "block" : "hidden"
					} md:block absolute md:static top-16 left-0 w-full ${
						currentTheme === "dark"
							? "bg-gray-900 border-gray-700"
							: "bg-white border-gray-200"
					}`}
				>
					<ul className="flex flex-col md:flex-row md:space-x-4">
						{navLinks.map(({ href, text, icon }) => (
							<li key={text}>
								<Link
									href={href}
									className={`flex text-lg py-1 px-3 hover:bg-green-100 hover:dark:text-black transition-all duration-300 rounded items-center ${
										currentTheme === "dark"
											? "text-gray-300"
											: "text-gray-900"
									}`}
								>
									{icon} {text}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Language and Buttons */}
				<div className="hidden md:flex items-center space-x-4">
					{/* Language Selector */}
					<div className="flex items-center space-x-1">
						<span className="w-4 h-4 bg-green-600 rounded-full" />
						<span className="text-sm">BN</span>
					</div>

					{/* Dark/Light Mode Toggle */}
					<button
						onClick={toggleDarkMode}
						className={`px-3 py-1.5 rounded flex items-center ${
							currentTheme === "dark"
								? "bg-gray-800"
								: "bg-gray-200"
						}`}
					>
						{currentTheme === "dark" ? "🌙" : "🌞"}
					</button>
					{/* Buttons */}
					<div className="flex space-x-4">
						{buttonLinks.map(
							({
								text,
								icon,
								bgColor = "bg-gray-100",
								hoverColor = "hover:bg-gray-200",
							}) => (
								<button
									key={text}
									className={`${bgColor} text-sm py-2 px-4 rounded-md flex items-center ${hoverColor}`}
								>
									{text} {icon}
								</button>
							)
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu Content */}
			<div
				className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-2`}
			>
				<nav className="flex flex-col space-y-2">
					<ul className="flex flex-col space-y-2">
						{navLinks.map(({ href, text, icon }) => (
							<li key={text}>
								<a
									href={href}
									className={`text-sm py-2 px-4 flex items-center ${
										currentTheme === "dark"
											? "text-gray-300 hover:bg-gray-800"
											: "text-gray-900 hover:bg-gray-100"
									}`}
								>
									{icon} {text}
								</a>
							</li>
						))}
					</ul>
					<div className="mt-4 flex flex-col space-y-2">
						{buttonLinks.map(
							({
								text,
								icon,
								bgColor = "bg-gray-100",
								hoverColor = "hover:bg-gray-200",
							}) => (
								<button
									key={text}
									className={`${bgColor} text-sm font-bold py-2 px-4 rounded-md flex items-center ${hoverColor}`}
								>
									{text} {icon}
								</button>
							)
						)}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
