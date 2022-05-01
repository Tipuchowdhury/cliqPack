import { Box, Heading, Text, Button, Container, Stack } from '@chakra-ui/react';

const StartInSeconds = () => (
  <Box as="section" color={'white'} bg="gray.900" py="12">
    <Container maxW={'container.md'} mx="auto">
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack spacing={{ base: '4', md: '5' }} align="center">
          <Heading size="lg">
            Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit..
          </Heading>
          <Text color="muted" maxW="2xl" textAlign="center" fontSize="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptatibus aliquid ducimus cupiditate! Dolores harum iste ipsum
            officia suscipit praesentium animi fuga, consequatur magnam eveniet,
            dignissimos, maiores libero similique excepturi repellat inventore
            atque ad? Voluptate quas perferendis maxime exercitationem
            laboriosam?
          </Text>
          <Text
            mt="2"
            maxW="2xl"
            textAlign="center"
            fontSize="md"
            color="teal.400"
          >
            Lorem ipsum dolor sit amet consectetur.
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
    </Container>
  </Box>
);

export default StartInSeconds;
