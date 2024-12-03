// src/components/Header.tsx
'use client';

import React from 'react';
<<<<<<< Updated upstream
import { Box, Flex, Image, Link as ChakraLink, Text, Button, IconButton, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
=======
import { Box, Flex, Image, Text, Button, IconButton, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
>>>>>>> Stashed changes
import Logo from '../assets/Logo.webp';

interface HeaderProps {
  isMenuOpen: boolean;
  cartCount: number;
  activeSection: string;
  onToggleMenu: () => void;
  onSectionClick: (section: string) => void;
  onAddToCart: () => void;
}

<<<<<<< Updated upstream
const Header: React.FC<HeaderProps> = ({ isMenuOpen, cartCount, activeSection, onToggleMenu, onSectionClick, onAddToCart }) => {
=======
const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  cartCount,
  activeSection,
  onToggleMenu,
  onSectionClick,
  onAddToCart,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (event: React.MouseEvent<HTMLElement>, section: string) => {
    event.preventDefault();

    if (pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      (async () => {
        await router.push('/');
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      })();
    }
    onSectionClick(section);
  };

>>>>>>> Stashed changes
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="50"
      w="full"
      borderBottom="1px"
      borderColor="gray.800"
      bg="blackAlpha.800"
      backdropFilter="blur(10px)"
    >
      <Flex align="center" justify="space-between" py="4" px="6">
<<<<<<< Updated upstream
        <ChakraLink href="/" display="flex" alignItems="center">
          <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
          <Text display={{ base: 'none', sm: 'inline-block' }} fontWeight="bold" color="#FFD700" ml="2">Baly</Text>
        </ChakraLink>
        <Flex as="nav" display={{ base: 'none', md: 'flex' }} align="center" gap="6">
=======
        <Link href="/">
          <Box display="flex" alignItems="center" cursor="pointer">
            <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
          </Box>
        </Link>
        <Flex as="nav" display={{ base: 'none', md: 'flex' }} align="center" gap="6" ml="80px">
>>>>>>> Stashed changes
          {['home', 'products', 'about'].map((section) => (
            <ChakraLink
              key={section}
<<<<<<< Updated upstream
              href={`#${section}`}
              color={activeSection === section ? '#FFD700' : 'white'}
              fontWeight="bold"
              onClick={() => onSectionClick(section)}
=======
              as="a"
              href={`/#${section}`}
              onClick={(event) => handleNavClick(event, section)}
              cursor="pointer"
              color={activeSection === section ? '#FFD700' : 'white'}
              fontWeight="bold"
>>>>>>> Stashed changes
              _hover={{ color: '#FFD700' }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ChakraLink>
          ))}
<<<<<<< Updated upstream
          <Link
            to="/contact" // Use Link to route to the ContactPage
            style={{ color: activeSection === 'contact' ? '#FFD700' : 'white', fontWeight: 'bold' }}
            onClick={() => onSectionClick('contact')}
          >
            Contact
=======
          <Link href="/contact">
            <Text
              display="flex"
              alignItems="center"
              cursor="pointer"
              color={activeSection === 'contact' ? '#FFD700' : 'white'}
              fontWeight="bold"
              onClick={() => onSectionClick('contact')}
              _hover={{ color: '#FFD700' }}
            >
              Contact
            </Text>
>>>>>>> Stashed changes
          </Link>
        </Flex>
        <Flex align="center">
          <Button
            bg="#FFD700"
            color="black"
            _hover={{ bg: '#FFA500' }}
            borderRadius="full"
            onClick={onAddToCart}
          >
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
              <ChakraLink
                key={section}
<<<<<<< Updated upstream
                href={`#${section}`}
                color={activeSection === section ? '#FFD700' : 'white'}
                fontWeight="bold"
                onClick={() => {
                  onSectionClick(section);
                  onToggleMenu();
                }}
=======
                as="a"
                href={`/#${section}`}
                onClick={(event) => {
                  handleNavClick(event, section);
                  onToggleMenu();
                }}
                cursor="pointer"
                color={activeSection === section ? '#FFD700' : 'white'}
                fontWeight="bold"
>>>>>>> Stashed changes
                _hover={{ color: '#FFD700' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ChakraLink>
            ))}
<<<<<<< Updated upstream
            <Link
              to="/contact"
              style={{ color: activeSection === 'contact' ? '#FFD700' : 'white', fontWeight: 'bold' }}
              onClick={() => {
                onSectionClick('contact');
                onToggleMenu();
              }}
            >
              Contact
=======
            <Link href="/contact">
              <Text
                display="flex"
                alignItems="center"
                cursor="pointer"
                color={activeSection === 'contact' ? '#FFD700' : 'white'}
                fontWeight="bold"
                onClick={() => {
                  onSectionClick('contact');
                  onToggleMenu();
                }}
                _hover={{ color: '#FFD700' }}
              >
                Contact
              </Text>
>>>>>>> Stashed changes
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
