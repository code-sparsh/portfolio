import React from 'react';

const Contact = () => {
  return (
    <div className="h-full md:w-1/2  flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full rounded-lg shadow-2xl p-8">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-white mb-6">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>

        {/* Contact form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>

        {/* Additional contact information */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-gray-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:work@sparshsethi.me" className="text-gray-200 font-bold">
              work@sparshsethi.me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;