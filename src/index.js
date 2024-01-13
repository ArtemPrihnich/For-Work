import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import BasicCategories from 'components/BasicCategories';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BasicCategories />
    </ChakraProvider>
  </React.StrictMode>
);
