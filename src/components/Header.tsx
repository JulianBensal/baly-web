// src/components/Header.tsx
'use client';

import React from 'react';
import { Box, Flex, Image, Link as ChakraLink, Text, Button, IconButton, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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

    }
    onSectionClick(section);
  };

        <ChakraLink href="/" display="flex" alignItems="center">
          <Image src={Logo} alt="Baly Logo" h="8" w="auto" />
          <Text display={{ base: 'none', sm: 'inline-block' }} fontWeight="bold" color="#FFD700" ml="2">Baly</Text>
        </ChakraLink>
        <Flex as="nav" display={{ base: 'none', md: 'flex' }} align="center" gap="6">
          {['home', 'products', 'about'].map((section) => (
            <Text
              key={section}
              href={`#${section}`}
              color={activeSection === section ? '#FFD700' : 'white'}
              fontWeight="bold"
              onClick={() => onSectionClick(section)}
              as="a"
              href={`#${section}`}
              onClick={(event) => handleNavClick(event, section)}
              style={{ cursor: 'pointer', color: activeSection === section ? '#FFD700' : 'white', fontWeight: 'bold' }}
              _hover={{ color: '#FFD700' }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Text>
          ))}
          <Link
            to="/contact" // Use Link to route to the ContactPage
            style={{ color: activeSection === 'contact' ? '#FFD700' : 'white', fontWeight: 'bold' }}
            onClick={() => onSectionClick('contact')}
          >
            Contact
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
              <Text
                key={section}
                href={`#${section}`}
                onClick={(event) => {
                  handleNavClick(event, section);
                  onToggleMenu();
                }}
                as="a"
                href={`/#${section}`}
                onClick={(event) => {
                  handleNavClick(event, section);
                  onToggleMenu();
                }}
                cursor="pointer"
                color={activeSection === section ? '#FFD700' : 'white'}
                fontWeight="bold"
                _hover={{ color: '#FFD700' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Text>
            ))}
            <Link
              to="/contact"
              style={{ color: activeSection === 'contact' ? '#FFD700' : 'white', fontWeight: 'bold' }}
              onClick={() => {
                onSectionClick('contact');
                onToggleMenu();
              }}
            >
              Contact
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
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
