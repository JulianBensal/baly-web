import React from 'react';
import { Box } from "@chakra-ui/react";
import BackgroundVideo from '../assets/vo_pixel_dark.png';

const PromoVideoSection: React.FC = () => {
  return (
    <Box w="full" bg="gray.900" position="relative" overflow="hidden" height="calc(100vh - 80px)">
      <Box
        as="video"
        id="promoVideo"
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        objectFit="cover"
        loop
        muted
        playsInline
        autoPlay // Asegura que el video se reproduzca automáticamente
        poster="/placeholder.svg?height=600&width=1200&text=Baly+Video+Poster"
      >
        <source src="https://balybrasil.com.br/files/home/Video-20240221171312.mp4" type="video/mp4" /> {/* Enlace directo al video */}
        Your browser does not support the video tag.
      </Box>

      {/* Superposición con la imagen de puntos */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bgImage={`url(${BackgroundVideo})`} // Usa la imagen de puntos como fondo
        bgSize="auto" // Asegura que la imagen se repita según su tamaño original
        bgRepeat="repeat" // Repite la imagen para cubrir todo el contenedor
        bgPosition="center" // Centra la imagen en el contenedor
        opacity="0.3" // Ajusta la opacidad según sea necesario
        pointerEvents="none" // Evita que la superposición interfiera con la interacción del usuario
      />
      
    </Box>
  );
}

export default PromoVideoSection;