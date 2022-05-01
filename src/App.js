import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import DesktopNav from './components/layout/Navbar/DesktopNav/DesktopNav';
import Body from './pages/Body';
import MobileNav from './components/layout/Navbar/MobileNav/MobileNav';
import Footer from './components/layout/Footer';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <DesktopNav />
      <Body />
      <Footer />
      <MobileNav />
    </ChakraProvider>
  );
}

export default App;
