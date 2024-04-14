import { RadioGroup, Radio, Flex, Box } from '@chakra-ui/react';

const UmbrellasSubTypes = ({
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
          borderColor={subType === 'Мужские зонты' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Мужские зонты' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Мужские зонты">
            Мужские зонты
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Женские зонты' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Женские зонты' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Женские зонты">
            Женские зонты
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={subType === 'Детские зонты' ? '#274e13' : '#5b5b5b'}
          borderRadius={10}
          bgColor={subType === 'Детские зонты' ? '#b6d7a8' : '#f3f6f4'}
        >
          <Radio padding={5} value="Детские зонты">
            Детские зонты
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default UmbrellasSubTypes;
