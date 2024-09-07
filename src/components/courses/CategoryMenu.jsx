const categories = [
	"Web & App Development",
	"Product Management & Design",
	"Business & Marketing",
	"Data Engineering",
	"Creatives",
];

const CategoryMenu = () => {
	return (
		<div className="flex space-x-4 flex-wrap">
			{categories.map((category) => (
				<button
					key={category}
					className="px-6 py-2 bg-gray-200 rounded-md whitespace-nowrap text-gray-700 hover:bg-gray-300"
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryMenu;
