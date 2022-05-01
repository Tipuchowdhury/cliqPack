import React from 'react';

import {
  Icon,
  Box,
  Grid,
  Heading,
  Text,
  Button,
  Container,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';

const GlassmorphismSection = () => (
  <Box as="section" color={'white'} bg="gray.700" py={{ base: '10', lg: '20' }}>
    <Container
      boxSizing="border-box"
      maxW={'container.lg'}
      mx={'auto'}
      w={{ base: '96%' }}
      rounded="6rem"
      py="12"
      px="6"
      bg="rgba(0,0,0,0.3)"
      filter={'blur'}
    >
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack
          spacing={{ base: '6', md: '8' }}
          align="center"
          textAlign={'center'}
        >
          <Heading size={useBreakpointValue({ base: 'xl', md: '2xl' })}>
            Win millions in prizes{' '}
          </Heading>
          <Text color="muted" maxW="2xl" textAlign="center" fontSize="md">
            Provably fair, on-chain games. <br />
            Win big with PancakeSwap.
          </Text>
        </Stack>
      </Stack>

      <Grid
        mt="20"
        justifyContent={'center'}
        gridTemplateColumns="repeat(auto-fit, 250px)"
        gap="10"
        color="black"
      >
        {/*  */}
        <Box
          p="4"
          bg="white"
          minH={'250px'}
          rounded={'xl'}
          aspectRatio="2/1"
          d="grid"
          alignContent={'space-between'}
          transform="rotate(-3deg)"
        >
          <Icon as={MdStar} h="12" w="12" ml="auto" />

          <Box>
            <Text fontSize="md" fontWeight={'black'}>
              Prediction
            </Text>
            <Heading my="1" size={'lg'} fontWeight="black">
              $750 million
            </Heading>
            <Text fontSize="medium" fontWeight={'black'}>
              In BNB so far
            </Text>
            <Text mt="6" mb="8" fontSize="medium" fontWeight={'base'}>
              Will BNB price rise or fall? guess correctly to win!
            </Text>
            <Button
              colorScheme={'teal'}
              variant="solid"
              rounded={'2xl'}
              size="lg"
              w="full"
              fontSize={'sm'}
            >
              Connect Pocket{' '}
            </Button>
          </Box>
        </Box>
        {/*  */}
        <Box
          p="4"
          bg="white"
          minH={'250px'}
          rounded={'xl'}
          aspectRatio="2/1"
          d="grid"
          alignContent={'space-between'}
          transform="rotate(3deg)"
        >
          <Icon as={MdStar} h="12" w="12" ml="auto" />

          <Box>
            <Text fontSize="md" fontWeight={'black'}>
              Prediction
            </Text>
            <Heading my="1" size={'lg'} fontWeight="black">
              $750 million
            </Heading>
            <Text fontSize="medium" fontWeight={'black'}>
              In BNB so far
            </Text>
            <Text mt="6" mb="8" fontSize="medium" fontWeight={'base'}>
              Will BNB price rise or fall? guess correctly to win!
            </Text>
            <Button
              colorScheme={'teal'}
              variant="solid"
              rounded={'2xl'}
              size="lg"
              w="full"
              fontSize={'sm'}
            >
              Connect Wallet{' '}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  </Box>
);

export default GlassmorphismSection;
