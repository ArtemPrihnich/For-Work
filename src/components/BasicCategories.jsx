import React, { useEffect, useState } from 'react';
import { Box, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import WomenBagsMaterial from './WomenBags/WomenBagsMaterial';
import WomenBagsSubTypes from './WomenBags/WomenBagsSubTypes';
import { useClipboard } from '@chakra-ui/react';

const BasicCategories = () => {
  const [type, setType] = useState(0);
  const [material, setMaterial] = useState(0);
  const [subType, setSubType] = useState(0);
  const [result, setResult] = useState('sssdsd');

  useEffect(() => setResult(''), [type, material, subType]);
  const { onCopy, value, setValue, hasCopied } = useClipboard('');

  return (
    <Box marginTop={20} marginBottom={20}>
      <Flex alignItems="center" justifyContent="center">
        <RadioGroup onChange={setType} value={type}>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="8"
            borderColor={type === 'Женские сумки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            bgColor={type === 'Женские сумки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={5} value="Женские сумки">
              Женские сумки
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="8"
            borderColor={type === 'Мужские сумки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            bgColor={type === 'Мужские сумки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={5} value="Мужские сумки">
              Мужские сумки
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="8"
            borderColor={type === 'Рюкзаки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            bgColor={type === 'Рюкзаки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={5} value="Рюкзаки">
              Рюкзаки
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="8"
            borderColor={type === 'Кошельки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            bgColor={type === 'Кошельки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={5} value="Кошельки">
              Кошельки
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="8"
            borderColor={type === 'Ремни' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            bgColor={type === 'Ремни' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={5} value="Ремни">
              Ремни
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="8"
            borderColor={type === 'Зонты' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            bgColor={type === 'Зонты' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={5} value="Зонты">
              Зонты
            </Radio>
          </Box>
        </RadioGroup>
      </Flex>
      <>
        {type === 'Женские сумки' && (
          <WomenBagsMaterial
            type={type}
            material={material}
            subType={subType}
            setMaterial={setMaterial}
            setSubType={setSubType}
            setFinalResult={setResult}
          />
        )}
        {type === 'Женские сумки' && material !== 0 && (
          <WomenBagsSubTypes
            type={type}
            material={material}
            subType={subType}
            result={result}
            setSubType={setSubType}
            setFinalResult={setResult}
            setValue={setValue}
          />
        )}
      </>
      <Flex alignItems="center" justify="center" marginTop="80px">
        <Box
          w={50}
          h={50}
          borderRadius={25}
          bgColor={hasCopied ? 'green' : 'none'}
        />
        {result !== '' && (
          <Text
            marginRight={6}
            marginLeft={6}
            fontSize={34}
            onClick={onCopy}
            value={value}
            padding={5}
            borderWidth={1}
            borderRadius={10}
            borderColor="black"
            bgColor="#fff4e9"
          >
            {result}
          </Text>
        )}
        <Box
          w={50}
          h={50}
          borderRadius={25}
          bgColor={hasCopied ? 'green' : 'none'}
        />
      </Flex>
    </Box>
  );
};

export default BasicCategories;
