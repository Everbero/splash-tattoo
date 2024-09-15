import { Marvel } from "next/font/google"; // Importando a fonte do Google
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

// Carregar a fonte Marvel do Google
const marvelFont = Marvel({
  weight: ["400", "700"], // Pode escolher os pesos que deseja carregar
  subsets: ["latin"], // Subsets de caracteres que você deseja
  variable: "--font-marvel", // Variável CSS para utilizar a fonte
});

// Metadados da página
export const metadata = {
  title: "Splash Tattoo | Tatuagem e Piercing em São Paulo - Estúdio na Liberdade",
  description:
    "Conheça a Splash Tattoo, estúdio de tatuagem e piercing no bairro da Liberdade, São Paulo. Fundado pelo artista Lima, oferecemos serviços com alta qualidade, segurança e profissionalismo desde 2008. Confira nosso portfólio e agende sua sessão!",
};

// Componente de layout raiz
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <GoogleAnalytics gaId="G-L2022SCY42" />
      <body className={`${marvelFont.variable} antialiased`}>
        {/* Seção Header */}
        <header>
          <Navbar />
        </header>

        {/* Seção Main (Corpo) */}
        <main>{children}</main>

        {/* Seção Footer */}
        <Footer />
      </body>
    </html>
  );
}
