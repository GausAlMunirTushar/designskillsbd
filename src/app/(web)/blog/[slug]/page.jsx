// app/blog/[slug]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";

// Sample data with slugs
const blogPosts = [
	{
		slug: "understanding-react-hooks",
		title: "Understanding React Hooks",
		content:
			"React Hooks are functions that let you use state and other React features...",
		author: "John Doe",
		date: "September 8, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
	{
		slug: "comprehensive-guide-to-javascript-closures",
		title: "A Comprehensive Guide to JavaScript Closures",
		content:
			"JavaScript closures are a fundamental concept that allows functions to access variables from an outer scope even after the outer function has finished executing. This powerful feature is key for creating private variables, managing state, and more.\n\n### What is a Closure?\n\nA closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. This means a closure can remember and access variables from the context in which it was created.\n\n### How Closures Work\n\nClosures are created whenever a function is defined inside another function. The inner function maintains access to the outer function's variables.\n\n**Example:**\n```javascript\nfunction outer() {\n  let count = 0;\n  function inner() {\n    count++;\n    console.log(count);\n  }\n  return inner;\n}\n\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2\n```\n\n### Common Use Cases\n\n- **Data Privacy:** Closures help in creating private variables.\n- **Function Factories:** Create functions with customized behavior.\n- **Maintaining State:** Track and maintain state across multiple function calls.\n\n### Best Practices\n\n- **Be Mindful of Memory Leaks:** Closures can cause memory leaks if not used carefully.\n- **Avoid Unintended Side Effects:** Ensure closures do not unintentionally alter variables in the outer scope.\n\n### Conclusion\n\nClosures are a powerful feature of JavaScript that enable functional programming patterns and can significantly improve code modularity and reusability. Understanding closures will enhance your ability to write efficient and clean JavaScript code.",
		author: "John Doe",
		date: "September 8, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
	{
		slug: "understanding-javascript-prototypes-inheritance",
		title: "Understanding JavaScript Prototypes and Inheritance",
		content:
			"JavaScript uses prototypes to enable inheritance, allowing objects to share properties and methods. This prototype-based inheritance is different from class-based inheritance in other languages but is equally powerful.\n\n### What is Prototypal Inheritance?\n\nPrototypal inheritance is a method by which objects can inherit properties and methods from other objects. Every JavaScript object has a prototype, which is another object from which it inherits properties and methods.\n\n### How Prototypes Work\n\nWhen you access a property or method of an object, JavaScript first looks at the object itself. If the property or method is not found, it looks up the prototype chain until it finds the property or reaches the end of the chain.\n\n**Example:**\n```javascript\nfunction Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.greet = function() {\n  console.log('Hello, ' + this.name);\n};\n\nconst person1 = new Person('Alice');\nperson1.greet(); // Hello, Alice\n```\n\n### Prototypes vs. Classes\n\nIn ES6, JavaScript introduced the `class` syntax, which is syntactic sugar over the existing prototype-based inheritance. Despite the class syntax, JavaScript still uses prototypes behind the scenes.\n\n### Best Practices\n\n- **Avoid Modifying Built-in Prototypes:** Modify only your own prototypes to avoid unexpected behavior.\n- **Understand Prototype Chain:** Knowing how the prototype chain works can help you debug and optimize your code.\n\n### Conclusion\n\nJavaScript's prototype-based inheritance model offers flexibility and power in object-oriented programming. By understanding prototypes, you can write more efficient and modular code, leveraging inheritance to create reusable and maintainable objects.",
		author: "John Doe",
		date: "September 8, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
	{
		slug: "mastering-javascript-array-methods",
		title: "Mastering JavaScript Array Methods",
		content:
			"JavaScript arrays come with a rich set of methods that allow you to perform a variety of operations on arrays. Mastering these methods can greatly enhance your ability to manipulate and process data effectively.\n\n### Common Array Methods\n\n- **`map()`**: Creates a new array with the results of calling a provided function on every element.\n  **Example:**\n  ```javascript\n  const numbers = [1, 2, 3];\n  const doubled = numbers.map(x => x * 2);\n  console.log(doubled); // [2, 4, 6]\n  ```\n\n- **`filter()`**: Creates a new array with all elements that pass a test implemented by the provided function.\n  **Example:**\n  ```javascript\n  const numbers = [1, 2, 3, 4, 5];\n  const evens = numbers.filter(x => x % 2 === 0);\n  console.log(evens); // [2, 4]\n  ```\n\n- **`reduce()`**: Executes a reducer function on each element of the array, resulting in a single output value.\n  **Example:**\n  ```javascript\n  const numbers = [1, 2, 3];\n  const sum = numbers.reduce((acc, val) => acc + val, 0);\n  console.log(sum); // 6\n  ```\n\n- **`forEach()`**: Executes a provided function once for each array element, typically used for side effects.\n  **Example:**\n  ```javascript\n  const numbers = [1, 2, 3];\n  numbers.forEach(num => console.log(num));\n  ```\n\n### Best Practices\n\n- **Chain Methods for Clarity:** Combining methods like `map()`, `filter()`, and `reduce()` can make your code more readable and expressive.\n- **Understand Performance Implications:** Some methods, like `reduce()`, can be less performant on large arrays, so be mindful of their impact.\n\n### Conclusion\n\nMastering JavaScript array methods is crucial for effective data manipulation and processing. By understanding and utilizing these methods, you can write cleaner, more efficient code and handle complex data operations with ease.",
		author: "John Doe",
		date: "September 8, 2024",
		image: "/banner.jpg",
		authorImage: "/logo.png",
	},
];

// Function to find a blog post by slug
async function getPost(slug) {
	return blogPosts.find((post) => post.slug === slug);
}

export default async function BlogViewPage({ params }) {
	const { slug } = params; // Correctly extract slug
	const post = await getPost(slug); // Use the slug to find the correct post

	// Handle case when post is not found
	if (!post) {
		return notFound(); // Show a 404 page
	}

	return (
		<div className="container mx-auto py-8 px-4">
			<div className="max-w-2xl mx-auto">
				<Image
					src={post.image}
					alt={post.title}
					className="w-full h-80 object-cover rounded-md mb-6"
					width={600}
					height={240}
				/>
				<h1 className="text-4xl font-bold mb-4">{post.title}</h1>

				<div className="flex items-center mb-6">
					<Image
						src={post.authorImage}
						alt={post.author}
						className="w-10 h-10 rounded-full mr-4"
						width={40}
						height={40}
					/>
					<div>
						<p className="text-sm font-semibold">{post.author}</p>
						<p className="text-xs text-gray-500">{post.date}</p>
					</div>
				</div>

				<div className="prose prose-lg">
					<p>{post.content}</p>
					{/* Additional content here */}
				</div>
			</div>
		</div>
	);
}
