import React from "react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      {/* Meta Tags para SEO Local */}
      <Head>
        <title>Splash Tattoo | Estúdio de Tatuagem na Liberdade, São Paulo</title>
        <meta
          name="description"
          content="Entre em contato com a Splash Tattoo, um estúdio de tatuagem localizado no bairro da Liberdade, São Paulo. Ligue para (11) 3628-4909 ou nos mande uma mensagem no WhatsApp."
        />
        <meta
          name="keywords"
          content="tatuagem, estúdio de tatuagem, Liberdade São Paulo, piercing, tatuador São Paulo, Splash Tattoo, estúdio de tatuagem Liberdade"
        />
        <meta name="author" content="Splash Tattoo" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Splash Tattoo | Estúdio de Tatuagem na Liberdade, São Paulo" />
        <meta
          property="og:description"
          content="Splash Tattoo é um estúdio de tatuagem localizado no bairro da Liberdade, São Paulo. Oferecemos tatuagens de alta qualidade, piercings e muito mais. Contate-nos!"
        />
        <meta property="og:image" content="/images/estudio-splash.jpg" />
        <meta property="og:url" content="https://www.splashtattoo.com.br/contato" />
        <meta property="business:contact_data:street_address" content="Rua Taguá 295" />
        <meta property="business:contact_data:locality" content="Liberdade" />
        <meta property="business:contact_data:region" content="São Paulo" />
        <meta property="business:contact_data:postal_code" content="01509-000" />
        <meta property="business:contact_data:country_name" content="Brasil" />
        <meta property="business:contact_data:phone_number" content="+55 11 3628-4909" />
        <meta property="business:contact_data:website" content="https://www.splashtattoo.com.br" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-black text-neutral-content">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center py-10">
            <h1 className="text-5xl font-bold text-red-600">Entre em Contato com a Splash Tattoo</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Estamos localizados no coração da Liberdade, São Paulo. Queremos ouvir de você! Marque sua consulta ou
              nos visite para conhecer nossos serviços.
            </p>
          </div>

          {/* Seção de Informações de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Endereço e Telefone */}
            <div className="bg-neutral rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold text-red-600">Visite-nos</h2>
              <p className="mt-4 text-lg">
                <strong>Endereço:</strong> Rua Taguá 295, Liberdade, São Paulo, SP
              </p>
              <p className="mt-2 text-lg">
                <strong>Telefone:</strong> <a href="tel:+551136284909">(11) 3628-4909</a>
              </p>
              <p className="mt-2 text-lg">
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5511993764909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  (11) 99376-4909
                </a>
              </p>
            </div>

            {/* Mapa Integrado (Google Maps Embed) */}
            <div className="bg-neutral rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold text-red-600">Nosso Local</h2>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.725816144798!2d-46.63163812378182!3d-23.56464676546515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a162bf1b3b%3A0x5d9c2c7f3e0ff8ec!2sRua%20Tagu%C3%A1%2C%20295%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001509-000!5e0!3m2!1spt-BR!2sbr!4v1694745256005!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
