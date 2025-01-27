"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import "./globals.css";
import React,{useState}   from "react";
// Set up fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="top-sticky bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
          <a href="#hero" className="font-bold text-white text-xl">My Portfolio</a>
          </div>

          {/* Navigation Links (Hidden on mobile, visible on md and above) */}
          <nav
            className={`absolute top-16 left-0 w-full bg-gray-800 md:static md:flex md:items-center md:w-auto md:gap-6 md:top-0 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-start p-4 md:flex-row md:items-center md:p-0 gap-4 text-sm">
              <li>
                <a
                  className="block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-1 mb-2"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded bg-gray-700 p-2 text-white hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          {children}
        </main>
      </body>
    </html>
  );
}
