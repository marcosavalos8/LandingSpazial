"use client";

import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-sm border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo + Redes */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold">spazial</div>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Navegación y texto legal en columna */}
        <div className="flex-1 flex flex-col items-center">
          {/* Enlaces en fila */}
          <div className="flex flex-wrap justify-center gap-6 font-medium underline underline-offset-4">
            <Link href="/spazial">My spazial</Link>
            <Link href="/products">Products</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/joinUs">Join Us</Link>
            <Link href="/legal">Polices & Legal</Link>
            <Link href="/sitemap">Site Map</Link>
          </div>

          {/* Texto legal abajo */}
          <p className="text-center mt-6 max-w-lg text-gray-600">
            spazial has all rights reserved. Please read carefully the polices
            and the legal issue defined and they could be modified at the
            company discretion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
