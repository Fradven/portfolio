"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Julius_Sans_One } from 'next/font/google';

const julius = Julius_Sans_One({ weight: ['400'], subsets: ['latin'] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-screen-xl m-auto">
      <nav className="flex justify-between">
        <h1>
          <Link className={`${julius.className}`} href="/">
            <p className="text-xl">Frédéric Van Overmerire</p>
            <p className="text-2xl ml-16 p-1 bg-beige">Junior Developer</p>
          </Link>
        </h1>
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle Menu</span>
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`md:flex md:gap-5 md:justify-around ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="m-1">
            <Link
              className={`${julius.className} p-1 transition duration-300 hover:bg-beige hover:ease-in ${
                usePathname() === '/' ? 'underline underline-offset-8' : ''
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="m-1">
            <Link
              className={`${julius.className} p-1 transition duration-300 hover:bg-beige hover:ease-in ${
                usePathname() === '/skills' ? 'underline underline-offset-8' : ''
              }`}
              href="/skills"
            >
              Skills
            </Link>
          </li>
          <li className="m-1">
            <Link
              className={`${julius.className} p-1 transition duration-300 hover:bg-beige hover:ease-in ${
                usePathname() === '/trainings'
                  ? 'underline underline-offset-8'
                  : ''
              }`}
              href="/trainings"
            >
              Professional training
            </Link>
          </li>
          <li className="m-1">
            <Link
              className={`${julius.className} p-1 transition duration-300 hover:bg-beige hover:ease-in ${
                usePathname() === '/projects'
                  ? 'underline underline-offset-8'
                  : ''
              }`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="m-1">
            <Link
              className={`${julius.className} p-1 transition duration-300 hover:bg-beige hover:ease-in ${
                usePathname() === '/contact'
                  ? 'underline underline-offset-8'
                  : ''
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
