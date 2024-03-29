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
  const [isActiveSlider, setActiveSlider] = useState(false);

  const { onCopy, value, setValue, hasCopied } = useClipboard('');

  useEffect(() => {
    if (name === '') {
      return;
    }
    for (let i = 1; i < quantity; i += 1) {
      if (i === 1) {
        setResult(`${name}.jpg`);
      }
      setResult(prevState => prevState + `|${name}-${i}.jpg`);
    }
  }, [name, quantity, result]);

  useEffect(() => setValue(result), [result, setValue]);

  useEffect(() => {
    if (quantity >= 7) {
      return setActiveSlider(true);
    }
    return setActiveSlider(false);
  }, [quantity, setActiveSlider]);

  return (
    <Box
      paddingRight={10}
      paddingLeft={10}
      marginBottom="80px"
      marginTop="80px"
    >
      <Box
        paddingTop={10}
        paddingBottom={10}
        borderWidth={4}
        borderRadius={20}
        bgColor="#E0E0E060"
      >
        <Heading marginBottom={10} textAlign="center">
          Image Maker
        </Heading>
        <Flex alignItems="center" justifyContent="center">
          <Input
            w="500px"
            marginRight="50px"
            size="lg"
            bgColor="#ffffff"
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => e.target.select()}
          />
          <RadioGroup
            onChange={setQuantity}
            value={quantity}
            marginRight="20px"
          >
            <Box
              display="inline-block"
              borderWidth={1}
              marginRight="6"
              borderColor={quantity === '2' ? '#274e13' : '#5b5b5b'}
              borderRadius={10}
              bgColor={quantity === '2' ? '#b6d7a8' : '#f3f6f4'}
            >
              <Radio padding={1} value={2}>
                2
              </Radio>
            </Box>
            <Box
              display="inline-block"
              borderWidth={1}
              marginRight="6"
              borderColor={quantity === '3' ? '#274e13' : '#5b5b5b'}
              borderRadius={10}
              bgColor={quantity === '3' ? '#b6d7a8' : '#f3f6f4'}
            >
              <Radio padding={1} value={3}>
                3
              </Radio>
            </Box>
            <Box
              display="inline-block"
              borderWidth={1}
              marginRight="6"
              borderColor={quantity === '4' ? '#274e13' : '#5b5b5b'}
              borderRadius={10}
              bgColor={quantity === '4' ? '#b6d7a8' : '#f3f6f4'}
            >
              <Radio padding={1} value={4}>
                4
              </Radio>
            </Box>
            <Box
              display="inline-block"
              borderWidth={1}
              marginRight="6"
              borderColor={quantity === '5' ? '#274e13' : '#5b5b5b'}
              borderRadius={10}
              bgColor={quantity === '5' ? '#b6d7a8' : '#f3f6f4'}
            >
              <Radio padding={1} value={5}>
                5
              </Radio>
            </Box>
            <Box
              display="inline-block"
              borderWidth={1}
              borderColor={quantity === '6' ? '#274e13' : '#5b5b5b'}
              borderRadius={10}
              bgColor={quantity === '6' ? '#b6d7a8' : '#f3f6f4'}
            >
              <Radio padding={1} value={6}>
                6
              </Radio>
            </Box>
          </RadioGroup>
          <Box>
            <Select
              size="md"
              borderColor={isActiveSlider ? '#274e13' : '#5b5b5b'}
              bgColor={isActiveSlider ? '#b6d7a8' : '#f3f6f4'}
              placeholder="..."
              onChange={e => setQuantity(e.target.value)}
              value={quantity}
            >
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
            </Select>
          </Box>
        </Flex>
        <Flex alignItems="center" justify="center" marginTop="40px">
          <Box
            w={50}
            h={50}
            borderRadius={25}
            bgColor={hasCopied ? 'green' : 'none'}
          />
          {result !== '' && (
            <Text
              marginRight={3}
              marginLeft={3}
              maxW="1400px"
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
    </Box>
  );
};

export default ImageMaker;
