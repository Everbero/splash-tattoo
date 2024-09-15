import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import data from "../lib/db.json"; // Importa o arquivo db.json

export default function PortfolioPage() {
  // Filtrando os itens do portfólio por artista
  const limaPortfolio = data.portfolio.filter((item: { artist: string; }) => item.artist === "Lima");
  const brenoPortfolio = data.portfolio.filter((item: { artist: string; }) => item.artist === "Breno Parisi");

  return (
    <>
      <Head>
        <title>Portfólio de Tatuagens e Piercings | Splash Tattoo</title>
        <meta
          name="description"
          content="Explore o portfólio de tatuagens e piercings dos artistas Lima e Breno Parisi, do estúdio Splash Tattoo, localizado no bairro da Liberdade, São Paulo."
        />
        <meta
          name="keywords"
          content="tatuagem, piercing, Splash Tattoo, Lima, Breno Parisi, portfólio, estúdio de tatuagem, Liberdade, São Paulo"
        />
        <meta property="og:title" content="Portfólio de Tatuagens e Piercings | Splash Tattoo" />
        <meta
          property="og:description"
          content="Conheça as tatuagens e piercings realizados por Lima e Breno Parisi no estúdio Splash Tattoo. Veja algumas das melhores criações dos nossos artistas."
        />
        <meta property="og:image" content="/images/splash.jpeg" />
        <meta property="og:url" content="https://www.splashtattoo.com.br/portfolio" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen text-neutral-content">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center py-10">
            <h1 className="text-5xl font-bold text-red-600">Portfólio de Piercings e Tatuagens</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Explore os trabalhos mais recentes dos nossos talentosos artistas. Aqui estão algumas amostras de piercings e tatuagens.
            </p>
          </div>

          {/* Seção: Lima */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Lima</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {limaPortfolio.slice(0, 3).map((item: { id: React.Key | null | undefined; title: string; image: string; description: string; }) => (
                <PortfolioItem
                  key={item.id}
                  title={item.title}
                  imageSrc={item.image}
                  description={item.description}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/portfolio/lima" className="btn btn-error">
                Veja Mais
              </Link>
            </div>
          </div>

          {/* Seção: Breno Parisi */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Breno Parisi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brenoPortfolio.slice(0, 3).map((item: { id: React.Key | null | undefined; title: string; image: string; description: string; }) => (
                <PortfolioItem
                  key={item.id}
                  title={item.title}
                  imageSrc={item.image}
                  description={item.description}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/portfolio/breno-parisi" className="btn btn-error">
                Veja Mais
              </Link>
            </div>
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
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-neutral rounded-lg shadow-lg p-4 text-center">
      <Image src={imageSrc} alt={title} width={400} height={400} className="rounded-lg" />
      <h3 className="text-xl font-bold mt-4 text-red-600">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};
