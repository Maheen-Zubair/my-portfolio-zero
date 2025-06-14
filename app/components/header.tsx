'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  //  Prevent horizontal scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-x-hidden');
    } else {
      document.body.classList.remove('overflow-x-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-customgray3 text-white fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-12">
        <div className="text-lg font-semibold">My Portfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-5 text-base">
          <Link href="/">Home</Link>
          <Link href="#Portfolio">About Me</Link>
          <Link href="#Services">Services</Link>
          <Link href="#Projects">Projects</Link>
          <Link href="#Contact">Contact</Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-customgray3 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-500">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#Portfolio" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link href="#Services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#Projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#Contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
}
