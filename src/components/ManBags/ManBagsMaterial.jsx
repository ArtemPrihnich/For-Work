import React, { useEffect } from 'react';
import { Box, Flex, Radio, RadioGroup } from '@chakra-ui/react';

const ManBagsMaterial = ({ material, setMaterial, setSubType }) => {
  useEffect(() => setSubType(0), [material, setSubType]);

  return (
    <Flex alignItems="center" justifyContent="center" marginTop={10}>
      <RadioGroup onChange={setMaterial} value={material}>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="20"
          borderColor={
            material === 'Мужские кожаные сумки' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={material === 'Мужские кожаные сумки' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Мужские кожаные сумки">
            Мужские кожаные сумки
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          borderColor={
            material === 'Мужские сумки текстиль, кожзам'
              ? '#274e13'
              : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            material === 'Мужские сумки текстиль, кожзам'
              ? '#b6d7a8'
              : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Мужские сумки текстиль, кожзам">
            Мужские сумки текстиль, кожзам
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default ManBagsMaterial;
