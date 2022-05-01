import React from 'react';

import { Icon, Box, Button, Flex, HStack } from '@chakra-ui/react';
import { Md3DRotation, MdAllOut } from 'react-icons/md';
import NavMenu from './NavMenuDesktop';
import { links, languages } from '../_data';

import SettingsModal from './ModalDesktop';

function Navbar() {
  return (
    <Flex
      color={'white'}
      pos="sticky"
      zIndex={'100'}
      px="4"
      py="4"
      bgColor="gray.900"
      d="flex"
      justifyContent={'space-between'}
    >
      <HStack alignItems={'center'} gap="6">
        <Flex alignItems={'center'} gap="2">
          <Icon as={Md3DRotation} w={'6'} h={'6'} />
          <Box fontSize={'xl'} fontWeight="bold">
            EzSwap
          </Box>
        </Flex>
        <Flex
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          {links.map(link => {
            return <NavMenu key={link.label} link={link} />;
          })}
        </Flex>
      </HStack>

      <HStack>
        <Button
          display={{
            base: 'none',
            lg: 'inline-flex',
          }}
          leftIcon={<Icon as={MdAllOut} w={'6'} h={'6'} />}
          cursor="pointer"
          colorScheme={'whiteAlpha'}
          color="#eee"
          variant={'ghost'}
          _focus={{
            boxShadow: 'none',
          }}
        >
          $9.18
        </Button>
        {languages.map(link => {
          return <NavMenu key={String(Date.now())} link={link} />;
        })}

        <SettingsModal />
        <Button
          display={{
            base: 'none',
            sm: 'flex',
          }}
          size={'sm'}
          cursor="pointer"
          colorScheme={'teal'}
          color="#eee"
          variant={'solid'}
          rounded="full"
          textTransform={'uppercase'}
        >
          Connect POCKET
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
