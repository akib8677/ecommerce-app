import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green py-4">
      <div className=" mx-auto flex text-center justify-between items-center">
        <div className="copyright text-center text-white">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </div>
        <div className="social-links">
          <a
            href="#"
            className="mx-2 hover:text-gray-400"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="mx-2 hover:text-gray-400"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="mx-2 hover:text-gray-400"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer