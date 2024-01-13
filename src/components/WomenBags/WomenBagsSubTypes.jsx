import { RadioGroup, Radio, Flex, Box } from '@chakra-ui/react';
import React from 'react';

const WomenBagsSubTypes = ({
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
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Сумки с ручками' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Сумки с ручками' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Сумки с ручками">
            Сумки с ручками
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Сумки на плечо' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Сумки на плечо' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Сумки на плечо">
            Сумки на плечо
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Сумки шопперы' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Сумки шопперы' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Сумки шопперы">
            Сумки шопперы
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={
            subType === 'Клатчи, вечерние сумки' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={subType === 'Клатчи, вечерние сумки' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Клатчи, вечерние сумки">
            Клатчи, вечерние сумки
          </Radio>
        </Box>
        <Box
          display={
            material === 'Женские сумки кожзам' ? 'none' : 'inline-block'
          }
          borderWidth={1}
          borderColor={subType === 'Сумки на пояс' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Сумки на пояс' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Сумки на пояс">
            Сумки на пояс
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default WomenBagsSubTypes;
