import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ForgotPasswordForm = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div data-aos="fade-in" className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="text-center text-2xl font-semibold mb-4">
          Reset Your Password
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email or phone number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="w-full bg-yellow-400 text-white font-bold py-2 rounded-md hover:bg-yellow-500">
            Send Reset Instructions
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-4 text-sm text-center">
          <a href="/login" className="text-blue-500">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
