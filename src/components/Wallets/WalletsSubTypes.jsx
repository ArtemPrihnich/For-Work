import { RadioGroup, Radio, Flex, Box } from '@chakra-ui/react';

const WalletsSubTypes = ({
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
            subType === 'Женские кожаные кошельки' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            subType === 'Женские кожаные кошельки' ? '#b6d7a8' : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Женские кожаные кошельки">
            Женские кожаные кошельки
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={
            subType === 'Женские кошельки кожзам' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            subType === 'Женские кошельки кожзам' ? '#b6d7a8' : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Женские кошельки кожзам">
            Женские кошельки кожзам
          </Radio>
        </Box>
        <Box
          display="inline-block"
          borderWidth={1}
          marginRight="8"
          borderColor={
            subType === 'Мужские кожаные кошельки' ? '#274e13' : '#5b5b5b'
          }
          borderRadius={10}
          bgColor={
            subType === 'Мужские кожаные кошельки' ? '#b6d7a8' : '#f3f6f4'
          }
        >
          <Radio padding={5} value="Мужские кожаные кошельки">
            Мужские кожаные кошельки
          </Radio>
        </Box>
      </RadioGroup>
    </Flex>
  );
};

export default WalletsSubTypes;
