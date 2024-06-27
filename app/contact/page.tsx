import React from 'react';
import { FiUser, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Let's Get In Touch.</h2>
        <p className="text-center mb-6">
          Or just reach out manually to <a href="mailto:hello@slothui.com" className="text-blue-500">hello@slothui.com</a>.
        </p>
        <form className="space-y-4">
          <div className="relative">
            <FiUser className="absolute top-3 left-3 text-gray-400" />
            <input type="text" placeholder="Enter your full name..." className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="relative">
            <FiMail className="absolute top-3 left-3 text-gray-400" />
            <input type="email" placeholder="Enter your email address..." className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="relative">
            <FiPhone className="absolute top-3 left-3 text-gray-400" />
            <input type="tel" placeholder="+44 (000) 000-0000" className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="relative">
            <FiMessageCircle className="absolute top-3 left-3 text-gray-400" />
            <textarea placeholder="Enter your main text here..." className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" maxLength={300} rows={4}></textarea>
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-2" />
            <label className="text-sm">I hereby agree to our <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a> terms.</label>
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Form</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
