import React from "react";
import WhatsBtn from "./WhatsBtn";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-5">
      <div className="container mx-auto text-center">
        <p className="font-bold text-lg">Splash Tattoo</p>
        <p className="mt-2">Endereço: Rua Taguá 295, Liberdade, São Paulo, SP</p>
        <p className="mt-2">Telefone: (11) 3628-4909</p>

        {/* Redes Sociais */}
        <div className="mt-4 flex justify-center space-x-6">
          <SocialIcon url="https://www.facebook.com/splashtattooepiercing" target="_blank" rel="noopener noreferrer" />
          <SocialIcon url="https://www.instagram.com/splashtattooepiercing" target="_blank" rel="noopener noreferrer" />
        </div>
      </div>
      <div className="bg-black text-center mt-4">
        <p >
          &copy; 2024 Splash Tattoo. Todos os direitos reservados.
        </p>
      </div>
      {/* Botão flutuante de WhatsApp */}
      <WhatsBtn />
    </footer>
  );
};

export default Footer;
