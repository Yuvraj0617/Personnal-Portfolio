import { Link } from "react-scroll"
import {MdMenu ,MdCancel } from "react-icons/md"
import { useState } from "react";
function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className="w-full bg-gray-600 shadow-sm block fixed top-0 left-0 z-50">
            <header className="flex items-center justify-between px-10 py-2">
                <div className="flex items-center">
                    <p className="text-3xl font-semibold py-2 text-gray-50 text-center ml-4">
                        Yubraj Sapkota
                    </p>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1" 
                    to="Home" spy={true} smooth={true} offset={50} duration={300}>Home</Link>
                    <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1" 
                    to="Education" spy={true} smooth={true} offset={50} duration={300}>Education</Link>
                    <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1" 
                    to="Projects" spy={true} smooth={true} offset={50} duration={300}>Projects</Link>
                    <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1"
                     to="Contact" spy={true} smooth={true} offset={50} duration={300}>Contact</Link>
                </nav>

                <div className="md:hidden">
                    <button onClick={toggleNav} className="text-3xl">
                        {navOpen ? <MdCancel /> : <MdMenu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {navOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full rounded-lg bg-gray-600 shadow-lg">
                        <nav className="flex flex-col items-center">
                            <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1" 
                            to="Home" spy={true} smooth={true} offset={50} duration={300}>Home</Link>
                            <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1" 
                            to="Education" spy={true} smooth={true} offset={50} duration={300}>Education</Link>
                            <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1" 
                            to="Projects" spy={true} smooth={true} offset={50} duration={300}>Projects</Link>
                            <Link className="hover:underline text-2xl text-amber-50 hover:text-orange-500 cursor-pointer px-2 py-1"
                             to="Contact" spy={true} smooth={true} offset={50} duration={300}>Contact</Link>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
}

export default Header;
