import Link from "next/link";

const LoginForm = () => {
	return (
	  <div>
		<h2 className="text-center text-2xl font-semibold mb-4">Log in to your account</h2>
		<form className="space-y-4">
		  <input
			type="email"
			placeholder="Provide phone number or email"
			className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
		  />
		  <button className="w-full bg-yellow-400 text-white font-bold py-2 rounded-md hover:bg-yellow-500">
			CONTINUE
		  </button>
		</form>
		<div className="flex justify-between mt-4 text-sm">
		  <a href="#" className="text-blue-500">Create Account</a>
		  <Link href="/forgot-password" className="text-blue-500">Forgot Password?</Link>
		</div>
	  </div>
	);
  };

  export default LoginForm;
