// src/components/Footer.tsx
'use client';
import React from 'react';
import { Box, Flex, Image, Text, Stack, Button } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/Logo.webp';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar la navegación y el desplazamiento suave
  const handleNavClick = (event: React.MouseEvent<HTMLElement>, section: string) => {
    event.preventDefault(); // Previene la acción predeterminada del enlace
    
    if (location.pathname === "/baly-web/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/baly-web/`);
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Espera a que la navegación a la página principal ocurra antes de desplazarse
    }
  };

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

          {/* Logo y Derechos - Izquierda */}
          <Stack align="flex-start" spacing="4">
            <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
            <Stack fontSize="sm" textAlign="left">
              <Text fontSize="sm">
                © 2023 Baly. Todos los <br />
                derechos reservados.
              </Text>
              <Text>Email: info@baly.com</Text>
              <Text>Teléfono: +54 11 1234-5678</Text>
            </Stack>
            <Button variant="link" color="#FFD700" _hover={{ color: '#FFA500' }} p="0" h="auto">
              Políticas de Privacidad
            </Button>
          </Stack>

          {/* Botones y Redes Sociales Centrados */}
          <Stack align="center" spacing="4" marginRight="100px">
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
      </Box>
    </Box>
  );
};

export default Footer;