import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green py-4 text-center">
      <div className="mx-auto">
        <div className="text-white">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
