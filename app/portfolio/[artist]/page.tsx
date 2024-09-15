"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import data from "../../lib/db.json"; // Caminho ajustado para o arquivo db.json

export default function ArtistPortfolioPage() {
  const params = useParams(); // Obtém os parâmetros da URL
  const artist = Array.isArray(params.artist) ? params.artist[0] : params.artist; // Garante que `artist` seja uma string

  // Formatação do nome do artista para corresponder ao JSON
  const formattedArtist = artist?.replace(/-/g, " ").toLowerCase();

  // Filtra o portfólio para encontrar os itens do artista correspondente
  const portfolio = data.portfolio.filter(
    (item) => item.artist.toLowerCase() === formattedArtist
  );

  // Se não houver itens encontrados, exibe uma mensagem
  if (portfolio.length === 0) {
    return <div className="text-center text-red-600">Nenhum item encontrado para este artista.</div>;
  }

  // Definição de meta tags dinâmicas
  const artistName = portfolio[0].artist;
  const pageTitle = `Portfólio de ${artistName} | Splash Tattoo`;
  const pageDescription = `Explore o portfólio completo de ${artistName}, artista do estúdio Splash Tattoo, com exemplos de tatuagens e piercings realizados.`;

  return (
    <>
      {/* Meta Tags para SEO */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${artistName}, tatuagem, piercing, portfólio, Splash Tattoo, artista, São Paulo`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={portfolio[0].image} />
        <meta property="og:url" content={`https://www.splashtattoo.com.br/portfolio/${artist}`} />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen text-neutral-content">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center py-10">
            <h1 className="text-5xl font-bold text-red-600">Portfólio de {artistName}</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Explore todos os trabalhos de {artistName} aqui.
            </p>
          </div>

          {/* Grade de itens do portfólio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                imageSrc={item.image}
                description={item.description}
                link={`/portfolio/${artist}/${item.id}`}
              />
            ))}
          </div>

          {/* Botão de voltar ao portfólio geral */}
          <div className="text-center mt-8">
            <Link href="/portfolio" className="btn btn-error">
              Voltar ao Portfólio Geral
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

interface PortfolioItemProps {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
}

// Componente que exibe um item do portfólio
const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, imageSrc, description, link }) => {
  return (
    <div className="bg-neutral rounded-lg shadow-lg p-4 text-center">
      <Link href={link}>
        <Image src={imageSrc} alt={title} width={400} height={400} className="rounded-lg" />
        <h3 className="text-xl font-bold mt-4 text-red-600">{title}</h3>
        <p className="mt-2">{description}</p>
      </Link>
    </div>
  );
};
