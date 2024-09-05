"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import LoginForm from "./LoginForm"; // Your existing LoginForm
import SignupForm from "./SignupForm"; // Your existing SignupForm

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	// Initialize AOS on component mount
	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-in-out" }); // Customize animation timing here
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
			<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
				{/* Dynamic Header with Animation */}
				<div data-aos="fade-in" data-aos-duration="500">
					<h2 className="text-center text-2xl font-bold mb-6 text-black">
						{isLogin
							? "Log in to your account"
							: "Create a New Account"}
					</h2>
				</div>
				{/* Toggle between Login and Create Account */}
				<div className="flex bg-gray-100 rounded-full mb-6 p-1">
					<button
						onClick={() => setIsLogin(true)}
						className={`w-1/2 py-2 font-medium text-center rounded-full transition-colors duration-300
                        ${
							isLogin
								? "bg-white shadow text-black"
								: "text-gray-500"
						}`}
					>
						Login
					</button>
					<button
						onClick={() => setIsLogin(false)}
						className={`w-1/2 py-2 font-medium text-center rounded-full transition-colors duration-300
                        ${
							!isLogin
								? "bg-white shadow text-black"
								: "text-gray-500"
						}`}
					>
						Create Account
					</button>
				</div>

				{/* Apply AOS animations when the forms toggle */}
				<div className="relative">
					{isLogin ? (
						<div data-aos="fade-right">
							{" "}
							{/* AOS Animation */}
							<LoginForm />
						</div>
					) : (
						<div data-aos="fade-left">
							{" "}
							{/* AOS Animation */}
							<SignupForm />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
