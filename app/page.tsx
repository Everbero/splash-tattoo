import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaPaintBrush, FaHeart, FaStar } from "react-icons/fa";
import Head from "next/head"; // Importando o componente Head para adicionar meta tags

export default function HomePage() {
  return (
    <>
      {/* Meta Tags para SEO */}
      <Head>
        <title>Splash Tattoo | Estúdio de Tatuagem na Liberdade, São Paulo</title>
        <meta
          name="description"
          content="Bem-vindo à Splash Tattoo, estúdio de tatuagem e piercing localizado no bairro da Liberdade, São Paulo. Conheça nosso portfólio e agende sua sessão!"
        />
        <meta
          name="keywords"
          content="tatuagem, estúdio de tatuagem, piercing, Splash Tattoo, Liberdade, São Paulo, artistas, tatuadores, body piercing"
        />
        <meta name="author" content="Splash Tattoo" />
        <meta property="og:title" content="Splash Tattoo | Estúdio de Tatuagem na Liberdade, São Paulo" />
        <meta
          property="og:description"
          content="A Splash Tattoo oferece arte corporal de alta qualidade com tatuagens, piercings e acessórios no bairro da Liberdade. Visite nosso estúdio e confira!"
        />
        <meta property="og:image" content="/images/splash.jpeg" />
        <meta property="og:url" content="https://www.splashtattoo.com.br/" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-10">
          {/* Seção Sobre o Estúdio */}
          <div className="text-center py-10 bg-neutral-focus text-neutral-content rounded-lg shadow-lg my-10">
            <h1 className="text-5xl font-bold text-red-600">
              Bem-vindo à Splash Tattoo
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Localizada no coração do bairro da Liberdade, em São Paulo, a Splash Tattoo é o destino certo para quem busca arte corporal de alta qualidade. Fundada em 2008 pelo renomado artista Lima, oferecemos serviços de tatuagem, piercing e acessórios com um padrão inigualável de segurança e excelência.
            </p>
          </div>

          {/* Seção Banner com Imagem e Texto */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-10">
            {/* Imagem */}
            <Image
              src="/images/splash.jpeg"
              alt="Banner"
              width={512}
              height={512}
              className="rounded-lg shadow-md"
            />

            {/* Texto com Ícones */}
            <div className="lg:ml-4 text-left">
              <h2 className="text-3xl font-bold text-red-600">
                Por que escolher a Splash Tattoo?
              </h2>
              <ul className="mt-4 space-y-4 text-lg">
                <li className="flex items-center">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  Profissionais experientes e qualificados
                </li>
                <li className="flex items-center">
                  <FaHeart className="text-red-600 mr-2" />
                  Ambiente seguro e higiênico
                </li>
                <li className="flex items-center">
                  <FaPaintBrush className="text-red-600 mr-2" />
                  Portfólio de arte corporal único e criativo
                </li>
                <li className="flex items-center">
                  <FaStar className="text-red-600 mr-2" />
                  Atendimento personalizado e focado nas suas ideias
                </li>
              </ul>

              {/* Texto sobre o Portfólio */}
              <h2 className="text-3xl font-bold text-red-600 mt-8">
                Explore nosso Portfólio
              </h2>
              <p className="mt-4 text-lg text-neutral-content">
                Veja algumas de nossas criações mais recentes. Nossos artistas estão prontos para trazer suas ideias à vida com muito talento e dedicação. Agende uma consulta e transforme sua pele em uma verdadeira obra de arte.
              </p>
              <Link className="btn btn-error mt-4" href={"/portfolio"}>
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
