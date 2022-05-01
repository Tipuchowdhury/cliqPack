import React from 'react';

import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

import ContentSection from '../components/layout/ContentSection/ContentSection';
import StartInSeconds from '../components/StartInSeconds';
import StatsSection from '../components/StatsSection';
import GlassmorphismSection from '../components/GlassmorphismSection';
import TimeBanner from '../components/TimeBanner';
import { motion } from 'framer-motion';


import cartoon from '../components/images/1.png';
import cartoon1 from '../components/images/12.png';
import cartoon2 from '../components/images/123.png';

const MotionImg = motion(Image);

function Body() {
  return (
    <Box color={'white'} minH="100vh" bg="gray.400">
      <TimeBanner />
      <ContentSection
        imageDirection="right"
        gridParentOverwrite={{
          alignItems: 'center',
        }}
        image={
          <MotionImg
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              duration: 1.5,
              yoyo: Infinity,
            }}
            borderRadius="md"
            src={cartoon}
          />
        }
      >
        <Box maxW={{ base: '500px', md: 'none' }}>
          <Heading size="2xl">Lorem ipsum dolor sit.</Heading>
          <Text mt="7" mb="6" fontSize="lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit labore laborum asperiores,
          </Text>
          <Box d="flex" gap="4">
            <Button size="lg" rounded="2xl" colorScheme="green">
              Lorem, ipsum.
            </Button>
            <Button
              size="lg"
              rounded="2xl"
              colorScheme="green"
              variant={'outline'}
            >
              Lorem, ipsum.
            </Button>
          </Box>
        </Box>
      </ContentSection>

      <StatsSection />

      <ContentSection
        imageDirection="right"
        gridParentOverwrite={{
          alignItems: 'center',
        }}
        containerOverwrite={{
          maxW: 'container.md',
        }}
        image={
          <MotionImg
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              duration: 1.5,
              yoyo: Infinity,
            }}
            borderRadius="md"
            src={cartoon1}
          />
        }
      >
        <Box maxW={{ base: '500px', md: 'none' }}>
          <Heading size="xl">Lorem ipsum dolor sit.</Heading>
          <Text mt="7" mb="6" fontSize="md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit labore laborum asperiores,
          </Text>
          <Box d="flex" gap="4">
            <Button rounded="2xl" colorScheme="green">
              Lorem, ipsum.
            </Button>
            <Button rounded="2xl" colorScheme="green" variant={'outline'}>
              Lorem, ipsum.
            </Button>
          </Box>
        </Box>
      </ContentSection>

      <ContentSection
        bg="gray.700"
        gridParentOverwrite={{
          alignItems: 'center',
        }}
        containerOverwrite={{
          maxW: 'container.md',
        }}
        image={
          <MotionImg
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              duration: 1.5,
              yoyo: Infinity,
            }}
            borderRadius="md"
            src={cartoon2}
          />
        }
      >
        <Box maxW={{ base: '500px', md: 'none' }}>
          <Heading size="xl">Lorem ipsum dolor sit.</Heading>
          <Text mt="7" mb="6" fontSize="md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit labore laborum asperiores,
          </Text>
          <Box d="flex" gap="4">
            <Button rounded="2xl" colorScheme="green">
              Lorem, ipsum.
            </Button>
            <Button rounded="2xl" colorScheme="green" variant={'outline'}>
              Lorem, ipsum.
            </Button>
          </Box>
        </Box>
      </ContentSection>

      <GlassmorphismSection />
      <ContentSection
        imageDirection="right"
        gridParentOverwrite={{
          alignItems: 'center',
        }}
        containerOverwrite={{
          maxW: 'container.md',
        }}
        image={
          <MotionImg
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              duration: 1.5,
              yoyo: Infinity,
            }}
            borderRadius="md"
            src={cartoon}
          />
        }
      >
        <Box maxW={{ base: '500px', md: 'none' }}>
          <Heading size="xl">Lorem ipsum dolor sit.</Heading>
          <Text mt="7" mb="6" fontSize="md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit labore laborum asperiores,
          </Text>
          <Box d="flex" gap="4">
            <Button rounded="2xl" colorScheme="green">
              Lorem, ipsum.
            </Button>
            <Button rounded="2xl" colorScheme="green" variant={'outline'}>
              Lorem, ipsum.
            </Button>
          </Box>
        </Box>
      </ContentSection>
      <StartInSeconds />
    </Box>
  );
}

export default Body;
