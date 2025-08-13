"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <header className=" shadow-md top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Spazial</div>

        <button
          className="bg-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex gap-6 items-center text-sm font-medium`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/spazial"
              prefetch={active ? null : false}
              onMouseEnter={() => setActive(true)}
            >
              My Spazial
            </Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/industries">Industries</Link>
          </li>

          <li>
            <Link href="/joinUs">Join Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
