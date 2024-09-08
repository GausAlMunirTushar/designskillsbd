import Image from "next/image";

const CourseCard = ({ course }) => {
	return (
		<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg flex flex-col border dark:border-gray-700 hover:border-green-400 ">
			<Image
				src={course.imageUrl}
				alt={course.title}
				className="rounded-t-lg object-cover w-full h-40"
				width={400}
				height={160}
			/>
			<div className="flex gap-4 py-3 px-4 items-center text-sm text-gray-600">
				<p className="bg-gray-200 dark:bg-gray-700 dark:text-white px-1.5 py-1 rounded ">
					{course.batch}
				</p>
				<p className="bg-gray-200 dark:bg-gray-700 dark:text-white px-1.5 py-1 rounded">
					{course.seatsLeft} Seats Left
				</p>
				<p className="bg-gray-200 dark:bg-gray-700 dark:text-white px-1.5 py-1 rounded">
					{course.daysLeft} Days Left
				</p>
			</div>
			<div className="flex-1 px-4 py-4">
				<h2 className="text-xl font-bold dark:text-white">
					{course.title}
				</h2>
			</div>
			<div className="px-4 py-4">
				<button className="w-full bg-gray-200 text-gray-900 py-2 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white font-semibold">
					See Details
				</button>
			</div>
		</div>
	);
};

export default CourseCard;
