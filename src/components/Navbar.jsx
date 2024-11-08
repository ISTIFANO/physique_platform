import React from 'react';
import logo from '../assets/logoN.png';

const Navbar = () => {
  const navStyle = {
    fontFamily: 'Arial, sans-serif', // Replace with your custom font stack
  };

  return (
    <header className="bg-white">
      <div className="w-screen p-4 pr-9">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img className="h-[156px] pt-4 cursor-pointer" src={logo} alt="Logo" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12" style={navStyle}>
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Inscription
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;
