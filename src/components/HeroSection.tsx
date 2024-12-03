import React from 'react';
import { Box } from "@chakra-ui/react";
import Fondo from '../assets/baly-fondo.webp';

const HeroSection: React.FC = () => {
  return (
    <Box 
      id="home" 
      w="full" 
      h={{ base: '200px', md: '420px' }} // Ajusta la altura, asegurando que sea visible en móviles
      bgImage={Fondo} 
      bgSize="cover" // Asegura que la imagen cubra todo el contenedor
      bgPosition="center" // Centra la imagen en el contenedor
      bgRepeat="no-repeat" // Evita que la imagen se repita
      position="relative"
    >
      {/* El contenido textual ha sido eliminado */}
    </Box>
  );
}

export default HeroSection;