import { Link, Button, Flex, Box, useDisclosure, Icon } from '@chakra-ui/react';

import { motion } from 'framer-motion';

function determineMenuPosition(obj) {
  return obj.align ?? 'default';
}

function NavMenu({ link }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const positionOfMenu = determineMenuPosition(link);
  return (
    <Box pos="relative">
      <Button
        as="a"
        cursor="pointer"
        colorScheme={'whiteAlpha'}
        color="#eee"
        variant={'ghost'}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {link.label ? link.label : <Icon as={link.icon} w={'6'} h={'6'} />}
      </Button>
      <NavHoverOptions
        translateX={link.align ? '-100%' : 'auto'}
        mt="px"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        animate={isOpen ? 'open' : 'closed'}
        options={link.children}
        positionOfMenu={positionOfMenu}
      />
    </Box>
  );
}

function NavHoverOptions({ options, positionOfMenu, ...props }) {
  return (
    <NavMenuPopup
      py="3"
      translateX="-100%"
      positionOfMenu={positionOfMenu}
      {...props}
    >
      <Flex
        trans
        as="ul"
        listStyleType={'none'}
        direction={'column'}
        color="gray.800"
      >
        {options.map(option => {
          return (
            <Box
              key={option.label}
              as="li"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Link
                px="6"
                py="2"
                _hover={{
                  textDecoration: 'none',
                }}
                d="block"
                fontSize={'md'}
                fontWeight="medium"
              >
                {' '}
                {option.label}
              </Link>
            </Box>
          );
        })}
      </Flex>
    </NavMenuPopup>
  );
}

export const MotionBox = motion(Box);

const NavMenuPopup = ({ positionOfMenu, ...props }) => {
  return (
    <MotionBox
      initial="init"
      variants={positionOfMenu === 'center' ? centerVariant : variants}
      outline="0"
      opacity="0"
      bg="white"
      w="3xs"
      shadow="lg"
      rounded="2xl"
      mt="0"
      pos="absolute"
      {...props}
    />
  );
};

// Animation Variant for Framer Motion

const centerVariant = {
  init: {
    opacity: 0,
    x: '-50%',
    y: -4,
    display: 'none',
    transition: {
      duration: 0,
    },
  },
  open: {
    opacity: 1,
    x: '-50%',
    y: 0,
    display: 'block',
    transition: {
      duration: 0.15,
    },
  },
  closed: {
    opacity: 0,
    x: '-50%',
    y: -4,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};
const variants = {
  init: {
    opacity: 0,
    y: -4,
    display: 'none',
    transition: {
      duration: 0,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    display: 'block',
    transition: {
      duration: 0.15,
    },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

export default NavMenu;
