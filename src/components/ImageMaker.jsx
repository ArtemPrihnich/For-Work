import {
  Flex,
  Input,
  Radio,
  RadioGroup,
  Text,
  Box,
  Heading,
  Select,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useClipboard } from '@chakra-ui/react';

const ImageMaker = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [result, setResult] = useState('');

  const { onCopy, value, setValue, hasCopied } = useClipboard('');

  useEffect(() => {
    if (name === '') {
      return;
    }
    for (let i = 1; i < quantity; i += 1) {
      if (i === 1) {
        setResult(`${name}.jpg`);
      }
      setResult(prevState => prevState + ` ${name}-${i}.jpg`);
    }
  }, [name, quantity, result]);

  useEffect(() => setValue(result), [result, setValue]);

  return (
    <Box paddingRight={10} paddingLeft={10}>
      <Heading marginBottom={10} textAlign="center">
        Image Maker
      </Heading>
      <Flex alignItems="center" justifyContent="center">
        <Input
          w="500px"
          marginRight="50px"
          size="lg"
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => e.target.select()}
        />
        <RadioGroup onChange={setQuantity} value={quantity} marginRight="20px">
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="6"
            // borderColor={type === 'Женские сумки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            // bgColor={type === 'Женские сумки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={1} value="2">
              2
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="6"
            // borderColor={type === 'Женские сумки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            // bgColor={type === 'Женские сумки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={1} value="3">
              3
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="6"
            // borderColor={type === 'Женские сумки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            // bgColor={type === 'Женские сумки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={1} value="4">
              4
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            marginRight="6"
            // borderColor={type === 'Женские сумки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            // bgColor={type === 'Женские сумки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={1} value="5">
              5
            </Radio>
          </Box>
          <Box
            display="inline-block"
            borderWidth={1}
            // borderColor={type === 'Женские сумки' ? '#274e13' : '#5b5b5b'}
            borderRadius={10}
            // bgColor={type === 'Женские сумки' ? '#b6d7a8' : '#f3f6f4'}
          >
            <Radio padding={1} value="6">
              6
            </Radio>
          </Box>
        </RadioGroup>
        <Box>
          <Select
            size="md"
            placeholder="..."
            onChange={e => setQuantity(e.target.value)}
            value={quantity}
          >
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </Select>
        </Box>
      </Flex>
      <Flex alignItems="center" justify="center" marginTop="60px">
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
            fontSize={24}
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

export default ImageMaker;
