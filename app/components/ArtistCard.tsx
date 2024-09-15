import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLink } from 'react-icons/fa';

interface ArtistCardProps {
  name: string;
  description: string;
  imageSrc: string;
  portfolioLink: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  name,
  description,
  imageSrc,
  portfolioLink,
  socialLinks,
}) => {
  return (
    <div className="bg-neutral rounded-lg shadow-lg p-6 text-neutral-content">
      <div className="text-center">
        {/* Imagem do Artista */}
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          className="rounded mx-auto"
        />
        <h3 className="text-2xl font-bold mt-4">{name}</h3>
        <p className="mt-2">{description}</p>

        {/* Links Sociais */}
        <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-400"
            >
              <FaInstagram size={24} />
            </a>
          )}
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-400"
            >
              <FaFacebookF size={24} />
            </a>
          )}
          {socialLinks.website && (
            <a
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-400"
            >
              <FaLink size={24} />
            </a>
          )}
        </div>

        {/* Botão para Portfólio */}
        <a href={portfolioLink} className="btn btn-error mt-4">
          Ver Portfólio
        </a>
      </div>
    </div>
  );
};

export default ArtistCard;
