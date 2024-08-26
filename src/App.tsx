import React from 'react';
import Component from './Component';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Component />
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;