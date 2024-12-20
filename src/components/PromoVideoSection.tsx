import React, { useState } from 'react';
import { Box, Heading, Text, Spinner } from "@chakra-ui/react";

const PromoVideoSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <Box w="full" bg="gray.900" position="relative" overflow="hidden" height="calc(100vh - 80px)">
      {/* Ruedita de cargando */}
      {isLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="2"
        >
          <Spinner size="xl" color="#FFD700" />
        </Box>
      )}

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
        onLoadedData={handleVideoLoaded} // Oculta el spinner cuando el video está cargado
      >
        <source src="https://balybrasil.com.br/files/home/Video-20240221171312.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* Superposición de sombra para mejorar la legibilidad del texto */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bg="rgba(0, 0, 0, 0.6)" // Ajusta la opacidad según sea necesario
        zIndex="1"
      />

      {/* Contenedor del texto */}
      <Box position="absolute" bottom="8" left="8" right="8" color="white" zIndex="2">
        <Heading as="h2" size="xl" fontWeight="extrabold" mb="2" color="#FFD700">Si hay fiesta… ¡Hay baly de 2 litros!</Heading>
        <Text fontSize="lg" fontWeight="medium">Conseguí Baly para tu negocio o evento</Text>
      </Box>
    </Box>
  );
}

export default PromoVideoSection;