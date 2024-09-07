import { courses } from "@/data/courses";
import CategoryMenu from "./CategoryMenu";
import CourseCard from "./CourseCard";

export default function Course() {
	return (
		<div className="container mx-auto px-4 pb-10">
			{/* Category Menu */}
			<div className="py-2">
				<h1 className="text-3xl font-bold mb-2 text-center">All Courses</h1>
				{/* <CategoryMenu /> */}
			</div>

			{/* Course Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	);
}
