import { Box, Flex, Radio, RadioGroup } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const WomenBagsMaterial = ({ material, setMaterial, setSubType }) => {
  useEffect(() => setSubType(0), [material]);

  return (
    <Flex alignItems="center" justifyContent="center" marginTop={10}>
      <RadioGroup onChange={setMaterial} value={material}>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="20"
          borderColor={
            material === 'Женские кожаные сумки' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={material === 'Женские кожаные сумки' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Женские кожаные сумки">
            Женские кожаные сумки
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          borderColor={
            material === 'Женские сумки кожзам' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={material === 'Женские сумки кожзам' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Женские сумки кожзам">
            Женские сумки кожзам
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default WomenBagsMaterial;
