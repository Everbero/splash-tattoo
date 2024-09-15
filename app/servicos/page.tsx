import React from "react";
import { FaPenFancy, FaHeart, FaPenNib, FaGem, FaUserTie, FaPaintBrush } from "react-icons/fa"; // React Icons já utilizado corretamente
import Head from "next/head";

export default function ServicesPage() {
  return (
    <>
      {/* Meta Tags para SEO */}
      <Head>
        <title>Serviços | Splash Tattoo</title>
        <meta
          name="description"
          content="Conheça os serviços oferecidos pela Splash Tattoo: Tatuagens, Piercings, Consultoria de Arte, Design Personalizado e mais. Localizados na Liberdade, São Paulo."
        />
        <meta
          name="keywords"
          content="tatuagem, piercing, consultoria de arte, design personalizado, Splash Tattoo, Liberdade, São Paulo, estúdio de tatuagem"
        />
        <meta name="author" content="Splash Tattoo" />
        <meta property="og:title" content="Serviços | Splash Tattoo" />
        <meta
          property="og:description"
          content="Explore os serviços oferecidos pela Splash Tattoo, incluindo tatuagens, piercings, consultoria de arte e design personalizado, tudo com máxima qualidade."
        />
        <meta property="og:image" content="/images/splash.jpeg" />
        <meta property="og:url" content="https://www.splashtattoo.com.br/servicos" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-black text-neutral-content">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center py-10">
            <h1 className="text-5xl font-bold text-red-600">Nossos Serviços</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              A Splash Tattoo oferece uma ampla variedade de serviços voltados para a arte corporal, todos realizados por profissionais experientes, com alta qualidade e segurança. Confira abaixo os nossos serviços:
            </p>
          </div>

          {/* Lista de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Tatuagem */}
            <ServiceCard
              icon={<FaPenFancy className="text-5xl text-red-600" />}
              title="Tatuagens"
              description="Oferecemos tatuagens em diversos estilos, como realismo, old school, tribal, oriental, e muito mais. Cada trabalho é feito com atenção aos detalhes e à segurança."
            />

            {/* Piercings */}
            <ServiceCard
              icon={<FaGem className="text-5xl text-red-600" />}
              title="Piercings"
              description="Aplicação de piercings em diversas áreas do corpo, utilizando joias de alta qualidade e seguindo rigorosos padrões de higiene."
            />

            {/* Consultoria de Arte */}
            <ServiceCard
              icon={<FaPenNib className="text-5xl text-red-600" />}
              title="Consultoria de Arte"
              description="Trabalhamos com você para desenvolver a ideia perfeita para a sua tatuagem ou piercing, oferecendo consultoria criativa e técnica."
            />

            {/* Design Personalizado */}
            <ServiceCard
              icon={<FaPaintBrush className="text-5xl text-red-600" />}
              title="Design Personalizado"
              description="Desenvolvemos designs exclusivos para cada cliente, garantindo que cada arte seja única e carregue o significado desejado."
            />

            {/* Correção e Cobertura de Tatuagens */}
            <ServiceCard
              icon={<FaHeart className="text-5xl text-red-600" />}
              title="Correção e Cobertura"
              description="Corrigimos ou cobrimos tatuagens antigas ou indesejadas, transformando-as em novas obras de arte, mantendo sua essência ou dando um novo significado."
            />

            {/* Atendimento VIP */}
            <ServiceCard
              icon={<FaUserTie className="text-5xl text-red-600" />}
              title="Atendimento VIP"
              description="Oferecemos sessões personalizadas em horários especiais para clientes que desejam um atendimento ainda mais exclusivo e reservado."
            />
          </div>
        </div>
      </div>
    </>
  );
}

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body items-center text-center">
          <div className="mb-4 text-5xl text-red-600">{icon}</div>
          <h3 className="card-title text-2xl font-bold text-red-600">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    );
  };
