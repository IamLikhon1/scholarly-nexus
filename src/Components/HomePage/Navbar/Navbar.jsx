'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="py-2 shadow w-full">
            <div className="">
                <div className="flex items-center h-16 w-full pr-3 pl-10">
                    <div className="flex items-center justify-between w-full">
                        {/* logo */}
                        <div className="flex items-center">

                            <Link href='/'>
                            <h1 className="text-black text-lg md:text-xl w-full font-medium">Collegiate<span className=" text-orange-600 uppercase"> Nexus</span></h1>
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <div className="space-x-8 ">
                                <Link
                                    href="/"
                                    className="text-black"
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/college"
                                    className="text-black "
                                >
                                    College
                                </Link>
                                <Link
                                    href="/admission"
                                    className="text-black"
                                >
                                    Admission
                                </Link>
                                <Link
                                    href="/myCollege"
                                    className="text-black"
                                >
                                    My College
                                </Link>
                                <Link
                                    href="#contact"
                                    className="text-black"
                                >
                                    Contact
                                </Link>

                            </div>

                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-400 focus:outline-none focus:bg-orange-400 focus:text-white transition duration-500"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {/* small */}

            {isOpen && (
                <div className="md:hidden w-full">
                    <div className="pl-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                        >
                            Home
                        </Link>
                        <Link
                            href="/college"
                            className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            College
                        </Link>
                        <Link
                            href="/admission"
                            className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Admission
                        </Link>
                        <Link
                            href="/myCollege"
                            className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            My College
                        </Link>
                        <Link
                            href="#contact"
                            className="text-black hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;