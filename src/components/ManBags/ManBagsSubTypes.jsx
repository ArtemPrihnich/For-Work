import { RadioGroup, Radio, Flex, Box } from '@chakra-ui/react';
import React from 'react';

const ManBagsSubTypes = ({
  type,
  material,
  subType,
  result,
  setSubType,
  setFinalResult,
  setValue,
}) => {
  if (subType !== 0) {
    setFinalResult(`${type} > ${material} > ${subType}`);
    setValue(result);
  }
  return (
    <Flex alignItems="center" justifyContent="center" marginTop={10}>
      <RadioGroup onChange={setSubType} value={subType}>
        <Box
          display={
            material === 'Мужские кожаные сумки' ? 'inline-block' : 'none'
          }
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Сумки через плечо' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Сумки через плечо' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Сумки через плечо">
            Сумки через плечо
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Сумки для ноутбука' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Сумки для ноутбука' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Сумки для ноутбука">
            Сумки для ноутбука
          </Radio>
        </Box>
        <Box
          display={
            material === 'Мужские кожаные сумки' ? 'inline-block' : 'none'
          }
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Портфели' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Портфели' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Портфели">
            Портфели
          </Radio>
        </Box>
        <Box
          display={
            material === 'Мужские кожаные сумки' ? 'inline-block' : 'none'
          }
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Клатчи, барсетки' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Клатчи, барсетки' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Клатчи, барсетки">
            Клатчи, барсетки
          </Radio>
        </Box>
        <Box
          display={
            material === 'Мужские кожаные сумки' ? 'inline-block' : 'none'
          }
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Поясные сумки' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Поясные сумки' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Поясные сумки">
            Поясные сумки
          </Radio>
        </Box>
        <Box
          display={
            material === 'Мужские кожаные сумки' ? 'inline-block' : 'none'
          }
          borderWidth={1}
          borderColor={subType === 'Дорожные сумки' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Дорожные сумки' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Дорожные сумки">
            Дорожные сумки
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default ManBagsSubTypes;
