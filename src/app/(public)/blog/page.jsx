import BlogCard from "@/components/blog/BlogCard";
import React from "react";

const blogPosts = [
	{
		title: "Understanding React Hooks",
		excerpt:
			"React Hooks are functions that let you use state and other React features...",
		author: "John Doe",
		date: "September 8, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
	{
		title: "A Deep Dive into JavaScript ES6 Features",
		excerpt:
			"JavaScript ES6 introduced many new features such as arrow functions, template literals...",
		author: "Jane Smith",
		date: "September 5, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
	{
		title: "Building Scalable Applications with Next.js",
		excerpt:
			"Next.js is a powerful framework for building server-side rendered applications...",
		author: "Alice Johnson",
		date: "September 3, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
	{
		title: "Building Scalable Applications with Next.js",
		excerpt:
			"Next.js is a powerful framework for building server-side rendered applications...",
		author: "Alice Johnson",
		date: "September 3, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
	{
		title: "Building Scalable Applications with Next.js",
		excerpt:
			"Next.js is a powerful framework for building server-side rendered applications...",
		author: "Alice Johnson",
		date: "September 3, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
];

const BlogPage = () => {
	return (
		<div className="container mx-auto px-4 py-10">
			<h1 className="text-4xl font-bold text-center mb-8">Our Amazing Blogs</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{blogPosts.map((post, index) => (
					<BlogCard key={index} post={post} />
				))}
			</div>
		</div>
	);
};

export default BlogPage;
