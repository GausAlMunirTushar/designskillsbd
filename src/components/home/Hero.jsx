import Image from "next/image";
const Hero = () => {
	return (
		<div className="py-8 bg-white dark:bg-gray-900">
			<div className="container mx-auto  rounded-lg py-8 px-4 bg-green-50 dark:bg-gray-900 border border-green-100 dark:border-gray-700 shadow flex flex-col md:flex-row items-center justify-center">
				<div className="flex flex-col md:w-1/2">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
						Bangladesh Learns{" "}
						<span className="text-red-600">Live</span>{" "}
						<span className="text-red-600">•</span>
					</h1>
					<p className="text-gray-700 dark:text-white text-lg mb-6">
						Upgrade your future through Skill Development
					</p>
					<button className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out max-w-fit">
						শেখা শুরু করুন →
					</button>
				</div>
				<div className="md:w-1/2 mt-8 md:mt-0">
					<Image
						src="/banner.jpg"
						alt="Skill Learning Illustration"
						className="w-full h-auto rounded-lg shadow-lg"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
