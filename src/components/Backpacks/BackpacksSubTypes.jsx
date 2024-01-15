import { RadioGroup, Radio, Flex, Box } from '@chakra-ui/react';
import React from 'react';

const BackpacksSubTypes = ({
  type,
  subType,
  result,
  setSubType,
  setFinalResult,
  setValue,
}) => {
  if (subType !== 0) {
    setFinalResult(`${type} > ${subType}`);
    setValue(result);
  }

  return (
    <Flex alignItems="center" justifyContent="center" marginTop={10}>
      <RadioGroup onChange={setSubType} value={subType}>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={
            subType === 'Женские кожаные рюкзаки' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            subType === 'Женские кожаные рюкзаки' ? '#b6d7a8' : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Женские кожаные рюкзаки">
            Женские кожаные рюкзаки
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={
            subType === 'Женские рюкзаки текстиль, кожзам'
              ? '#274e13'
              : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            subType === 'Женские рюкзаки текстиль, кожзам'
              ? '#b6d7a8'
              : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Женские рюкзаки текстиль, кожзам">
            Женские рюкзаки текстиль, кожзам
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={
            subType === 'Мужские кожаные рюкзаки' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            subType === 'Мужские кожаные рюкзаки' ? '#b6d7a8' : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Мужские кожаные рюкзаки">
            Мужские кожаные рюкзаки
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          borderColor={
            subType === 'Мужские рюкзаки текстиль' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            subType === 'Мужские рюкзаки текстиль' ? '#b6d7a8' : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Мужские рюкзаки текстиль">
            Мужские рюкзаки текстиль
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default BackpacksSubTypes;
