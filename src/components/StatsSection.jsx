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

const StartInSeconds = () => (
  <Box as="section" color={'white'} bg="gray.700" py={{ base: '10', lg: '20' }}>
    <Container maxW={'container.lg'} mx="auto">
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack
          spacing={{ base: '6', md: '8' }}
          align="center"
          textAlign={'center'}
        >
          <Heading size={useBreakpointValue({ base: 'xl', md: '2xl' })}>
            Used by millions. <br /> Trusted with billion.
          </Heading>
          <Text color="muted" maxW="2xl" textAlign="center" fontSize="md">
            PancakeSwap has the most users of any decentralized platform, ever.
            And those users are now entrusting the platform with over $6 billion
            in funds
          </Text>
          <Text color="teal.200" maxW="2xl" textAlign="center" fontSize="lg">
            Will you join them?
          </Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{ base: 'column', sm: 'row' }}
          justify="center"
        >
          <Button
            colorScheme={'teal'}
            variant="solid"
            rounded={'2xl'}
            size="lg"
          >
            Connect Pocket{' '}
          </Button>
        </Stack>
      </Stack>

      <Grid
        mt="20"
        justifyContent={'center'}
        gridTemplateColumns="repeat(auto-fit, 250px)"
        gap="6"
        color="black"
      >
        <Box
          p="4"
          bg="white"
          minH={'250px'}
          rounded={'xl'}
          aspectRatio="2/1"
          height="80px"
          d="grid"
          alignContent={'space-between'}
        >
          <Icon as={MdStar} h="12" w="12" ml="auto" />

          <Box>
            <Text lineHeight={0.9} fontSize="4xl" fontWeight={'black'}>
              4.4 million users
            </Text>
            <Text mt="8">made in the last 30 days</Text>
          </Box>
        </Box>
        <Box
          p="4"
          bg="white"
          minH={'250px'}
          rounded={'xl'}
          aspectRatio="2/1"
          height="80px"
          d="grid"
          alignContent={'space-between'}
        >
          <Icon as={MdStar} h="12" w="12" ml="auto" />

          <Box>
            <Text lineHeight={0.9} fontSize="4xl" fontWeight={'black'}>
              4.4 million users
            </Text>
            <Text mt="8">made in the last 30 days</Text>
          </Box>
        </Box>
        <Box
          p="4"
          bg="white"
          minH={'250px'}
          rounded={'xl'}
          aspectRatio="2/1"
          height="80px"
          d="grid"
          alignContent={'space-between'}
        >
          <Icon as={MdStar} h="12" w="12" ml="auto" />

          <Box>
            <Text lineHeight={0.9} fontSize="4xl" fontWeight={'black'}>
              4.4 million users
            </Text>
            <Text mt="8">made in the last 30 days</Text>
          </Box>
        </Box>
      </Grid>
    </Container>
  </Box>
);

export default StartInSeconds;
