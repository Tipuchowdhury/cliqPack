import React from 'react';

import {
  Icon,
  Box,
  Text,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';

function ModalDesktop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        cursor="pointer"
        colorScheme={'whiteAlpha'}
        color="#eee"
        variant={'ghost'}
        px="2"
        onClick={onOpen}
        _focus={{
          boxShadow: 'none',
        }}
      >
        <Icon as={MdSettings} w={'6'} h={'6'} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="75vh" overflowY="auto">
          <ModalHeader
            bg="gray.700"
            color="whiteAlpha.800"
            fontWeight={'black'}
          >
            Settings
          </ModalHeader>
          <ModalCloseButton color={'white'} />
          <ModalBody>
            <Box py="3">
              <Text
                fontSize={'xl'}
                mt="3"
                fontWeight="bold"
                textTransform={'uppercase'}
              >
                Global
              </Text>
              <FormControl
                mt="5"
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} htmlFor="email-alerts" mb="0">
                  Enable email alerts?
                </FormLabel>
                <Switch colorScheme={'teal'} size="lg" id="email-alerts" />
              </FormControl>
              <FormControl
                mt="6"
                display="grid"
                gap="2"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} mb="2">
                  Default Transaction Speed (GWEI)
                </FormLabel>
                <Flex gap={'3'}>
                  <Button colorScheme={'teal'} size="md" rounded="full">
                    Standard (5)
                  </Button>
                  <Button colorScheme={'teal'} size="md" rounded="full">
                    Fast (5)
                  </Button>
                  <Button colorScheme={'teal'} size="md" rounded="full">
                    Instant (7)
                  </Button>
                </Flex>
              </FormControl>
            </Box>
            <Divider my={6} border="2px solid" />
            <Box py="3">
              <Text
                fontSize={'xl'}
                fontWeight="bold"
                textTransform={'uppercase'}
              >
                Swaps & Liquidity
              </Text>

              <FormControl
                mt="6"
                display="grid"
                gap="2"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} mb="2">
                  Slippage Tolerance{' '}
                </FormLabel>
                <Flex gap={'3'} wrap="wrap">
                  <Button colorScheme={'teal'} size="md" rounded="full">
                    0.1%
                  </Button>
                  <Button colorScheme={'teal'} size="md" rounded="full">
                    0.5%
                  </Button>
                  <Button colorScheme={'teal'} size="md" rounded="full">
                    1.0%
                  </Button>
                </Flex>
              </FormControl>
              <FormControl
                mt="8"
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} htmlFor="email-alerts" mb="0">
                  Tx deadline (mins)
                </FormLabel>
                <Input
                  // border="2px solid teal"
                  variant={'filled'}
                  colorScheme={'teal'}
                  htmlSize={4}
                  width="auto"
                />
              </FormControl>
              <FormControl
                mt="8"
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} htmlFor="email-alerts" mb="0">
                  Expert Mode
                </FormLabel>
                <Switch colorScheme={'teal'} size="lg" id="email-alerts" />
              </FormControl>
              <FormControl
                mt="8"
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} htmlFor="email-alerts" mb="0">
                  Disable Multihops
                </FormLabel>
                <Switch colorScheme={'teal'} size="lg" id="email-alerts" />
              </FormControl>
              <FormControl
                mt="8"
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} htmlFor="email-alerts" mb="0">
                  Subgraph Health Indicator
                </FormLabel>
                <Switch colorScheme={'teal'} size="lg" id="email-alerts" />
              </FormControl>
              <FormControl
                mt="8"
                display="flex"
                alignItems="center"
                justifyContent={'space-between'}
              >
                <FormLabel fontSize={'lg'} htmlFor="email-alerts" mb="0">
                  Flippy sounds
                </FormLabel>
                <Switch colorScheme={'teal'} size="lg" id="email-alerts" />
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDesktop;
