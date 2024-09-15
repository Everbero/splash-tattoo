"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo e Menu na Esquerda */}
          <div className="flex items-center space-x-4">
            <Logo />
            <div className="hidden lg:flex space-x-4">
              <Link href="/" className="btn btn-ghost">
                Início
              </Link>
              <Link href="/sobre" className="btn btn-ghost">
                Sobre
              </Link>
            </div>
          </div>

          {/* Menu na Direita (visível apenas em telas grandes) */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/portfolio" className="btn btn-ghost">
              Portfólio
            </Link>
            <Link href="/servicos" className="btn btn-ghost">
              Serviços
            </Link>
            <Link href="/contato" className="btn btn-ghost">
              Contato
            </Link>
          </div>

          {/* Botão Mobile (visível apenas em telas pequenas) */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile (visível apenas quando o estado isMobileMenuOpen for true) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col space-y-2 mt-4">
              <Link href="/" className="btn btn-ghost" onClick={toggleMobileMenu}>
                Início
              </Link>
              <Link href="/sobre" className="btn btn-ghost" onClick={toggleMobileMenu}>
                Sobre
              </Link>
              <Link href="/portfolio" className="btn btn-ghost" onClick={toggleMobileMenu}>
                Portfólio
              </Link>
              <Link href="/servicos" className="btn btn-ghost" onClick={toggleMobileMenu}>
                Serviços
              </Link>
              <Link href="/contato" className="btn btn-ghost" onClick={toggleMobileMenu}>
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
