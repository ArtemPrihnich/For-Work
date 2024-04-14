import { Input, ListItem, OrderedList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const NumbersCutter = () => {
  const [numbers, setNumbers] = useState('');
  const [numbersList, setNumbersList] = useState([]);

  useEffect(() => {
    if (numbers !== '') {
      let buff = numbers.split('грн.');
      buff.pop();
      setNumbersList(buff);
    }
  }, [numbers]);

  return (
    <div>
      {numbersList.length !== 0 && (
        <OrderedList marginLeft="10">
          {numbersList.map((item, index) => {
            return <ListItem key={index}>{item}</ListItem>;
          })}
        </OrderedList>
      )}
      <Input
        value={numbers}
        onChange={e => setNumbers(e.target.value.replaceAll(' ', ''))}
        onFocus={e => e.target.select()}
      />
    </div>
  );
};

export default NumbersCutter;
