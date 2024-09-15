"use client"
// components/Logo.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  const [logoSrc, setLogoSrc] = useState("/images/splash-tattoo-logo.webp");

  const handleMouseEnter = () => {
    setLogoSrc("/images/splash-tattoo-logo-noir.webp"); // Imagem alternativa ao passar o mouse
  };

  const handleMouseLeave = () => {
    setLogoSrc("/images/splash-tattoo-logo.webp"); // Imagem original
  };

  return (
    <div className="logo-container">
      <Link href="/">
        <Image
          src={logoSrc}
          alt="Logo"
          width={200} // ajuste o tamanho conforme necessário
          height={80}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
    </div>
  );
}
