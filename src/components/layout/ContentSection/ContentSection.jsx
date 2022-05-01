import * as React from 'react';
import { Box, Grid } from '@chakra-ui/react';

const ContentSection = ({
  imageDirection = 'left',
  image,
  gridParentOverwrite = {},
  containerOverwrite = {},
  children,
  ...restProps
}) => {
  return (
    <Box as="section" bgGradient='linear(to-r, #302e46, #2f5158)' overflowX="hidden" py="20" {...restProps}>
      <Box maxW="1234" mx="auto" w="91%" {...containerOverwrite}>
        <Grid
          d={{ base: 'block', lg: 'grid' }}
          columnGap="20"
          rowGap="8"
          gridAutoFlow={'dense'}
          templateColumns={{ lg: '1fr 1fr' }}
          {...gridParentOverwrite}
        >
          <Box
            pos="relative"
            gridColumn={{ lg: imageDirection === 'left' ? '1/2' : '2/3' }}
          >
            {image}
          </Box>
          <Box
            mt={{ base: '8', lg: 'unset' }}
            color="gray.200"
            gridColumn={{ lg: imageDirection === 'left' ? '2/3' : '1/2' }}
            gridRow={{ lg: '1/2' }}
          >
            {children}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContentSection;
