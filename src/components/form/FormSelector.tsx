// components/FormSelector.tsx
import React from 'react';
import { Stack, Button } from '@chakra-ui/react';

interface FormSelectorProps {
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
}

const FormSelector: React.FC<FormSelectorProps> = ({ selectedSubject, setSelectedSubject }) => {
  const subjects = [
    { id: 'sell', label: 'Quiero vender (Tengo CNPJ)' },
    { id: 'event', label: '¡Baly en tu evento!' },
    { id: 'sponsorship', label: 'Patrocinios y Colaboraciones' },
  ];

  return (
    <Stack spacing={4}>
      {subjects.map((subject) => (
        <Button
          key={subject.id}
          onClick={() => setSelectedSubject(subject.id)}
          bg={selectedSubject === subject.id ? '#FFD700' : 'gray.800'}
          color={selectedSubject === subject.id ? 'black' : 'white'}
          _hover={{ bg: selectedSubject === subject.id ? '#FFA500' : 'gray.700' }}
        >
          {subject.label}
        </Button>
      ))}
    </Stack>
  );
};

export default FormSelector;
