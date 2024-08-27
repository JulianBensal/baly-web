// components/SellForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Select, Flex, Stack, FormLabel as Label } from '@chakra-ui/react';

interface FormData {
  resellerType: string;
  province: string;
}

interface SellFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
}

const SellForm: React.FC<SellFormProps> = ({ onSubmit, isSubmitting }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [resellerType, setResellerType] = React.useState('');
  const provinciasArgentinas = [
    "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa",
    "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
    "Santiago del Estero", "Tierra del Fuego", "Tucumán"
  ];

  return (
    <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Label>Selecciona tu tipo de entidad:</Label>
        <Flex mt={2}>
          <Button
            onClick={() => setResellerType('individual')}
            flex={1}
            bg={resellerType === 'individual' ? '#FFD700' : 'gray.800'}
            color={resellerType === 'individual' ? 'black' : 'white'}
            _hover={{ bg: resellerType === 'individual' ? '#FFA500' : 'gray.700' }}
            mr={4}
          >
            Individual
          </Button>
          <Button
            onClick={() => setResellerType('legal')}
            flex={1}
            bg={resellerType === 'legal' ? '#FFD700' : 'gray.800'}
            color={resellerType === 'legal' ? 'black' : 'white'}
            _hover={{ bg: resellerType === 'legal' ? '#FFA500' : 'gray.700' }}
          >
            Entidad Legal (CNPJ)
          </Button>
        </Flex>
      </Box>

      <Box>
        <Label>Selecciona tu provincia:</Label>
        <Select
          placeholder="Elige tu provincia"
          bg="gray.800"
          color="white"
          borderColor="gray.700"
          mt={2}
          {...register('province', { required: "La provincia es requerida" })}
        >
          {provinciasArgentinas.map((provincia) => (
            <option key={provincia} value={provincia.toLowerCase().replace(/\s+/g, '-')}>
              {provincia}
            </option>
          ))}
        </Select>
        {errors.province && <Box color="red.500" mt={2}>{errors.province.message}</Box>}
      </Box>

      <Button
        type="submit"
        isLoading={isSubmitting}
        bg="#FFD700"
        color="black"
        _hover={{ bg: '#FFA500' }}
        disabled={!resellerType}
      >
        {isSubmitting ? 'Enviando...' : 'Contáctanos'}
      </Button>
    </Stack>
  );
};

export default SellForm;
