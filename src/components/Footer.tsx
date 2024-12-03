<<<<<<< Updated upstream
// components/Footer.tsx
=======
// src/components/Footer.tsx
'use client';
>>>>>>> Stashed changes

import React from 'react';
import { Box, Flex, Image, Text, Stack, Button } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
<<<<<<< Updated upstream
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
=======
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '../assets/Logo.webp';

const Footer: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Función para manejar la navegación y el desplazamiento suave
  const handleNavClick = (event: React.MouseEvent<HTMLElement>, section: string) => {
    event.preventDefault(); // Previene la acción predeterminada del enlace

    if (pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/');
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <Box as="footer" w="full" py="8" bg="gray.900" color="white">
      <Box maxW="7xl" mx="auto" px="4">
        <Flex direction="row" justify="space-between" alignItems="center">
          {/* Logo y Derechos - Izquierda */}
          <Stack align="flex-start" spacing="4">
            <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
            <Stack fontSize="sm" textAlign="left">
              <Text fontSize="sm">
                © 2023 Baly. Todos los <br />
                derechos reservados.
              </Text>
>>>>>>> Stashed changes
              <Text>Email: info@baly.com</Text>
              <Text>Teléfono: +54 11 1234-5678</Text>
            </Stack>
            <Button variant="link" color="#FFD700" _hover={{ color: '#FFA500' }} p="0" h="auto">
              Políticas de Privacidad
            </Button>
          </Stack>

          <Stack align="center" spacing="4">
            <Stack direction="row" spacing="4">
              <Link href="/" passHref>
                <Box as="a" _hover={{ color: '#FFD700' }}>
                  <Box as={FaFacebook} boxSize="6" />
                  <Text srOnly>Facebook</Text>
                </Box>
              </Link>
              <Link href="/" passHref>
                <Box as="a" _hover={{ color: '#FFD700' }}>
                  <Box as={FaInstagram} boxSize="6" />
                  <Text srOnly>Instagram</Text>
                </Box>
              </Link>
              <Link href="/" passHref>
                <Box as="a" _hover={{ color: '#FFD700' }}>
                  <Box as={FaLinkedin} boxSize="6" />
                  <Text srOnly>LinkedIn</Text>
                </Box>
              </Link>
            </Stack>
            <Button
              variant="outline"
              borderColor="#FFD700"
              color="#FFD700"
              _hover={{ bg: '#FFD700', color: 'black' }}
              onClick={() => router.push('/contact')}
            >
              Ir a Contacto
            </Button>
            <Button
              variant="outline"
              borderColor="#FFD700"
              color="#FFD700"
              _hover={{ bg: '#FFD700', color: 'black' }}
              onClick={(event) => handleNavClick(event, 'products')}
            >
              Ver Productos
            </Button>
          </Stack>

<<<<<<< Updated upstream
          <Stack align="flex-end" spacing="4" fontSize="sm">
            <Link href="#home" _hover={{ color: '#FFD700' }}>Inicio</Link>
            <Link href="#products" _hover={{ color: '#FFD700' }}>Productos</Link>
            <Link href="#about" _hover={{ color: '#FFD700' }}>Nosotros</Link>
            <Link href="#contact" _hover={{ color: '#FFD700' }}>Contacto</Link>
          </Stack>
        </Stack>
=======
          {/* Links a la Derecha */}
          <Stack align="left" spacing="4" fontSize="sm">
            <Text
              as="a"
              href="#home"
              onClick={(event) => handleNavClick(event, 'home')}
              cursor="pointer"
              _hover={{ color: '#FFD700' }}
            >
              Inicio
            </Text>
            <Text
              as="a"
              href="#products"
              onClick={(event) => handleNavClick(event, 'products')}
              cursor="pointer"
              _hover={{ color: '#FFD700' }}
            >
              Productos
            </Text>
            <Text
              as="a"
              href="#about"
              onClick={(event) => handleNavClick(event, 'about')}
              cursor="pointer"
              _hover={{ color: '#FFD700' }}
            >
              Nosotros
            </Text>
            <Link href="/contact">
              <Text
                cursor="pointer"
                _hover={{ color: '#FFD700' }}
                onClick={() => router.push('/contact')}
              >
                Contacto
              </Text>
            </Link>
          </Stack>
        </Flex>
>>>>>>> Stashed changes
      </Box>
    </Box>
  );
};

export default Footer;
