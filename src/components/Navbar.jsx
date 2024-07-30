// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ecell.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    return (
        <nav className="py-5 rounded-[7rem] w-[90vw] mx-auto relative top-3 border-[1px] bg-black" style={{border:'1px solid #322d22',boxShadow: '20px -10px 100px #282410'}}>
            <div className="container mx-auto px-[2rem] flex justify-between items-center">
                <div className="w-20"><img src={Logo} alt="" /></div>
                <div className="lg:hidden">
                    <button
                        onClick={toggleNav}
                        className="text-white  focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`lg:flex lg:items-center lg:space-x-20 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <Link
                        to="/"
                        className="text-xl block mt-4 lg:mt-0 text-white  hover:text-[#ffde59] transition-colors duration-200"
                        onClick={closeNav}
                    >
                        Home
                    </Link>
                    <Link
                        to="/teams"
                        className="text-xl block mt-4 lg:mt-0 text-white  hover:text-[#ffde59] transition-colors duration-200"
                        onClick={closeNav}
                    >
                        Teams
                    </Link>
                    <Link
                        to="/events"
                        className="text-xl block mt-4 lg:mt-0 text-white  hover:text-[#ffde59] transition-colors duration-200"
                        onClick={closeNav}
                    >
                        Events
                    </Link>
                    <Link
                        to="/contactus"
                        className="text-xl block mt-4 lg:mt-0 text-white  hover:text-[#ffde59] transition-colors duration-200"
                        onClick={closeNav}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
