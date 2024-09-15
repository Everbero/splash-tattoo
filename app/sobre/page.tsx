import React from "react";
import Head from "next/head";
import ArtistCard from "../components/ArtistCard";

// Função para calcular anos de experiência
function calculateYearsOfExperience(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre Nós | Splash Tattoo</title>
        <meta
          name="description"
          content="Conheça a Splash Tattoo, estúdio de tatuagem e piercing no bairro da Liberdade, São Paulo. Saiba mais sobre nossos artistas e seus anos de experiência."
        />
        <meta
          name="keywords"
          content="tatuagem, estúdio de tatuagem, piercing, Splash Tattoo, Liberdade, São Paulo, artistas, tatuadores, body piercing"
        />
        <meta name="author" content="Splash Tattoo" />
        <meta property="og:title" content="Sobre Nós | Splash Tattoo" />
        <meta
          property="og:description"
          content="Conheça a Splash Tattoo, estúdio de tatuagem e piercing no bairro da Liberdade, São Paulo. Saiba mais sobre nossos artistas e seus anos de experiência."
        />
        <meta property="og:image" content="/images/estudio-splash.jpg" />
        <meta property="og:url" content="https://www.splashtattoo.com.br/sobre" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen text-neutral-content">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center py-10">
            <h1 className="text-5xl font-bold text-red-600">Sobre a Splash Tattoo</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Desde 2008, a Splash Tattoo é mais que um estúdio de tatuagem — é uma
              comunidade de artistas e clientes unidos pela paixão pela arte corporal.
              Localizado no vibrante bairro da Liberdade, São Paulo, somos conhecidos
              pela qualidade, segurança e atendimento personalizado.
            </p>
          </div>

          {/* Seção: Artistas */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Conheça Nossos Artistas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Lima */}
              <ArtistCard
                name="Lima"
                description={`No ano de 2001, Lima entra no mundo da tatuagem com seu primeiro estúdio na região Jardins, onde ficou até 2007. Em 2008, fundou o Splash Tattoo no bairro da Liberdade. Body piercer, Lima possui ${calculateYearsOfExperience(2001)} anos de experiência.`}
                imageSrc="/images/staff_lima.jpg"
                portfolioLink="/portfolio/lima"
                socialLinks={{
                  instagram: "https://www.instagram.com/lima_splashtattoo",
                  facebook: "https://www.facebook.com/lima",
                }}
              />

              {/* Breno Parisi */}
              <ArtistCard
                name="Breno Parisi"
                description={`Tatuador especializado em realismo, Breno desenvolve trabalhos de alta qualidade e criatividade há ${calculateYearsOfExperience(2003)} anos. Além disso, trabalha em estilos como old school, oriental, maori, tribal e new school.`}
                imageSrc="/images/staff_breno.jpg"
                portfolioLink="/portfolio/breno-parisi"
                socialLinks={{
                  instagram: "https://www.instagram.com/brenoparisi",
                  website: "https://www.brenoparisi.com",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
