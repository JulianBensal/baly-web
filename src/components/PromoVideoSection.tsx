import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

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
      <Box position="absolute" bottom="8" left="8" right="8" color="white">
        <Heading as="h2" size="xl" fontWeight="extrabold" mb="2" color="#FFD700">Si hay fiesta hay Baly de 2 litros.</Heading>
        <Text fontSize="lg" fontWeight="medium">Conseguí Baly para tu negocio o evento</Text>
      </Box>
    </Box>
  );
}

export default PromoVideoSection;