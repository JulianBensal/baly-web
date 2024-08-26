// components/Footer.tsx

import React from 'react';
import { Box, Flex, Image, Text, Stack, Link, Button } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/Logo.webp';

const Footer: React.FC = () => {
  return (
    <Box as="footer" w="full" py="8" bg="gray.900" color="white">
      <Box maxW="7xl" mx="auto" px="4">
        <Stack direction={{ base: "column", md: "row" }} spacing="8">
          <Stack spacing="4">
            <Flex align="center" gap="4">
              <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
              <Text fontSize="sm">© 2023 Baly. Todos los derechos reservados.</Text>
            </Flex>
            <Stack fontSize="sm">
              <Text>Email: info@baly.com</Text>
              <Text>Teléfono: +54 11 1234-5678</Text>
            </Stack>
            <Button variant="link" color="#FFD700" _hover={{ color: '#FFA500' }} p="0" h="auto">
              Políticas de Privacidad
            </Button>
          </Stack>

          <Stack align="center" spacing="4">
            <Stack direction="row" spacing="4">
              <Link href="#" _hover={{ color: '#FFD700' }}>
                <Box as={FaFacebook} boxSize="6" />
                <Text srOnly>Facebook</Text>
              </Link>
              <Link href="#" _hover={{ color: '#FFD700' }}>
                <Box as={FaInstagram} boxSize="6" />
                <Text srOnly>Instagram</Text>
              </Link>
              <Link href="#" _hover={{ color: '#FFD700' }}>
                <Box as={FaLinkedin} boxSize="6" />
                <Text srOnly>LinkedIn</Text>
              </Link>
            </Stack>
            <Button variant="outline" borderColor="#FFD700" color="#FFD700" _hover={{ bg: '#FFD700', color: 'black' }}>
              Ir a Contacto
            </Button>
            <Button variant="outline" borderColor="#FFD700" color="#FFD700" _hover={{ bg: '#FFD700', color: 'black' }}>
              Ver Productos
            </Button>
          </Stack>

          <Stack align="flex-end" spacing="4" fontSize="sm">
            <Link href="#home" _hover={{ color: '#FFD700' }}>Inicio</Link>
            <Link href="#products" _hover={{ color: '#FFD700' }}>Productos</Link>
            <Link href="#about" _hover={{ color: '#FFD700' }}>Nosotros</Link>
            <Link href="#contact" _hover={{ color: '#FFD700' }}>Contacto</Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;
