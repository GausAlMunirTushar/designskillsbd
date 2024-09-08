import Image from "next/image";

// components/BlogCard.jsx
const BlogCard = ({ post }) => {
	return (
	  <div className="w-full shadow-md rounded-md overflow-hidden border dark:border-gray-800 cursor-pointer">
		<Image
		  src={post.image}
		  alt={post.title}
		  className="w-full h-48 object-cover"
		  width={400}
		  height={160}
		/>
		<div className="p-4">
		  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
		  <p className="text-gray-600 text-sm">{post.excerpt}</p>
		  <div className="flex items-center mt-4">
			<Image
			  src={post.authorImage}
			  alt={post.author}
			  className="w-8 h-8 rounded-full mr-2"
			  width={400}
			  height={160}
			/>
			<span className="text-sm text-gray-500">{post.author}</span>
			<span className="text-sm text-gray-400 ml-4">{post.date}</span>
		  </div>
		</div>
	  </div>
	);
  };

  export default BlogCard;
