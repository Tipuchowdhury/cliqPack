import React from 'react';

import { Icon, Box, Heading, Button, Container, Stack } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';

const GlassmorphismSection = () => (
  <Box as="section" color={'white'} bg="gray.700" py={{ base: '10', lg: '20' }}>
    <Container
      boxSizing="border-box"
      maxW={1234}
      w={{ base: '96%' }}
      mx={'auto'}
      rounded="2rem"
      py="12"
      px="6"
      bg="rgba(0,0,0,0.3)"
      filter={'blur'}
    >
      <Stack spacing={{ base: '4' }} w="fit-content">
        <Heading size="md">Win $210,606 in Lottery</Heading>
        <Box
          bg="black"
          color="teal.300"
          maxW="2xl"
          textAlign="left"
          fontWeight={'bold'}
          px="4"
          py="2"
          fontSize="3xl"
          f
          rounded={'lg'}
          w="fit-content"
        >
          23h 30m 26s
        </Box>
        <Button
          colorScheme={'teal'}
          variant="solid"
          rounded={'2xl'}
          size="md"
          w="fit-content"
          fontSize={'sm'}
          gap="2"
        >
          Connect Pocket <Icon as={MdArrowForward} />
        </Button>
      </Stack>
    </Container>
  </Box>
);

export default GlassmorphismSection;
