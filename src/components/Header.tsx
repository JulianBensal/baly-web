import React from 'react';
import { Box, Flex, Image, Text, Button, IconButton, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.webp';

interface HeaderProps {
  isMenuOpen: boolean;
  cartCount: number;
  activeSection: string;
  onToggleMenu: () => void;
  onSectionClick: (section: string) => void;
  onAddToCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, cartCount, activeSection, onToggleMenu, onSectionClick, onAddToCart }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (event: React.MouseEvent<HTMLElement>, section: string) => {
    event.preventDefault(); // Previene la acción predeterminada del enlace
  
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/`);
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Espera a que la navegación a la página principal ocurra antes de desplazarse
    }
    onSectionClick(section);
  };

  return (
    <Box as="header" position="sticky" top="0" zIndex="50" w="full" borderBottom="1px" borderColor="gray.800" bg="blackAlpha.800" backdropFilter="blur(10px)">
      <Flex align="center" justify="space-between" py="4" px="6">
        <Box as={RouterLink} to="/" display="flex" alignItems="center">
          <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
        </Box>
        <Flex as="nav" display={{ base: 'none', md: 'flex' }} align="center" gap="6" marginLeft="80px">
          {['home', 'products', 'about'].map((section) => (
            <Text
              key={section}
              as="a"
              href={`#${section}`}
              onClick={(event) => handleNavClick(event, section)}
              style={{ cursor: 'pointer', color: activeSection === section ? '#FFD700' : 'white', fontWeight: 'bold' }}
              _hover={{ color: '#FFD700' }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Text>
          ))}
          <Box
            as={RouterLink}
            to="/contact"
            display="flex"
            alignItems="center"
            style={{ color: activeSection === 'contact' ? '#FFD700' : 'white', fontWeight: 'bold' }}
            onClick={() => onSectionClick('contact')}
          >
            Contact
          </Box>
        </Flex>
        <Flex align="center">
          <Button bg="#FFD700" color="black" _hover={{ bg: '#FFA500' }} borderRadius="full" onClick={onAddToCart}>
            <Box as={FaShoppingCart} mr="2" />
            <Text display={{ base: 'none', sm: 'inline' }}>Carrito</Text>
            <Text ml="1">({cartCount})</Text>
          </Button>
          <IconButton
            aria-label="Toggle Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggleMenu}
          />
        </Flex>
      </Flex>
      {isMenuOpen && (
        <Box display={{ md: 'none' }} p="4">
          <Stack spacing="4">
            {['home', 'products', 'about'].map((section) => (
              <Text
                key={section}
                as="a"
                href={`#${section}`}
                onClick={(event) => {
                  handleNavClick(event, section);
                  onToggleMenu();
                }}
                style={{ cursor: 'pointer', color: activeSection === section ? '#FFD700' : 'white', fontWeight: 'bold' }}
                _hover={{ color: '#FFD700' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Text>
            ))}
            <Box
              as={RouterLink}
              to="/contact"
              display="flex"
              alignItems="center"
              style={{ color: activeSection === 'contact' ? '#FFD700' : 'white', fontWeight: 'bold' }}
              onClick={() => {
                onSectionClick('contact');
                onToggleMenu();
              }}
            >
              Contact
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default Header;