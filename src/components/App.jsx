import { Box } from '@chakra-ui/react';
import BasicCategories from './BasicCategories';
import ImageMaker from './ImageMaker';
import NumbersCutter from './NumbersCutter';

export const App = () => {
  return (
    <Box>
      <BasicCategories />
      <ImageMaker />
      <NumbersCutter />
    </Box>
  );
};
