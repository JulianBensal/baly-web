// components/AboutSection.tsx

import React from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const AboutSection: React.FC = () => {
  return (
    <Box id="about" w="full" py={{ base: 12, md: 24 }} bg="black">
      <Box maxW="7xl" mx="auto" px="4">
        <Heading as="h2" size="2xl" fontWeight="extrabold" textAlign="center" mb="12" color="#FFD700">Sobre Baly</Heading>
        <Text mt="4" color="white" textAlign="center" maxW="2xl" mx="auto" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
          Con más de dos décadas de historia, Baly llega a Argentina para revolucionar el mercado de bebidas energéticas a través de la innovación y un compromiso inquebrantable con la calidad.<br></br><br></br>
          Nuestra misión es ofrecer una energía accesible y de alta calidad, ahora disponible en la innovadora botella PET de 2 litros, una novedad exclusiva en Argentina.<br></br><br></br>
          Además de nuestra innovadora botella, ofrecemos una gama de sabores vibrantes y precios competitivos, diseñados para acompañarte en cada desafío y asegurando que nunca te falte la energía para alcanzar tus metas.<br></br><br></br>
          Nuestra dedicación a la sostenibilidad y la conexión con nuestros consumidores nos impulsa a seguir innovando, ofreciendo productos que combinan sabor, energía y responsabilidad.
        </Text>
      </Box>
    </Box>
  );
}

export default AboutSection;
