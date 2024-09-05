const SignupForm = () => {
	return (
	  <div>
		<h2 className="text-center text-2xl font-semibold mb-4">Create a New Account</h2>
		<form className="space-y-4">
		  <input
			type="text"
			placeholder="Enter Your Number"
			className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
		  />
		  <button className="w-full bg-yellow-400 text-white font-bold py-2 rounded-md hover:bg-yellow-500">
			CONTINUE
		  </button>
		</form>
		<div className="flex justify-between mt-4 text-sm">
		  <a href="#" className="text-blue-500">Log In</a>
		  <a href="#" className="text-blue-500">Forgot Password?</a>
		</div>
	  </div>
	);
  };

  export default SignupForm;
