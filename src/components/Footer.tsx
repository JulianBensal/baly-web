import React from 'react';
import { Box, Flex, Image, Text, Stack, Link, Button } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom'; // Importar hooks de navegación
import Logo from '../assets/Logo.webp';

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
        <Flex direction="row" justify="space-between" alignItems="center">
          
          {/* Logo y Derechos - Izquierda */}
          <Stack align="flex-start" spacing="4">
            <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
            <Stack fontSize="sm" textAlign="left">
              <Text fontSize="sm">© 2023 Baly. Todos los <br></br>derechos reservados.</Text>
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

          {/* Links a la Derecha */}
          <Stack align="left" spacing="4" fontSize="sm">
            <Text
              as="a"
              href="#home"
              onClick={(event) => handleNavClick(event, 'home')}
              _hover={{ color: '#FFD700' }}
            >
              Inicio
            </Text>
            <Text
              as="a"
              href="#products"
              onClick={(event) => handleNavClick(event, 'products')}
              _hover={{ color: '#FFD700' }}
            >
              Productos
            </Text>
            <Text
              as="a"
              href="#about"
              onClick={(event) => handleNavClick(event, 'about')}
              _hover={{ color: '#FFD700' }}
            >
              Nosotros
            </Text>
            <Text
              as="a"
              href="/baly-web/contact"
              _hover={{ color: '#FFD700' }}
            >
              Contacto
            </Text>
          </Stack>
          
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;