import { RadioGroup, Radio, Flex, Box } from '@chakra-ui/react';

const BeltsSubTypes = ({
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
            subType === 'Женские кожаные ремни' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={subType === 'Женские кожаные ремни' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Женские кожаные ремни">
            Женские кожаные ремни
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={
            subType === 'Мужские кожаные ремни' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={subType === 'Мужские кожаные ремни' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Мужские кожаные ремни">
            Мужские кожаные ремни
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Тканевые ремни' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Тканевые ремни' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Тканевые ремни">
            Тканевые ремни
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default BeltsSubTypes;
