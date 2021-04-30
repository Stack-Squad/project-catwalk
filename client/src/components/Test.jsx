import React, { useState } from 'react';

const Test = () => {
  const [obj, setObj] = useState({
    name: 'Jay',
    age: 4,
    address: [6, 7],
  });

  // setTimeout(() => {
  //   setObj({
  //     ...obj,
  //     name: 'Hello',
  //     age: 56,
  //   });
  // }, 0);

  // setObj({
  //   name: 'Jay',
  //   age: 4,
  //   address: [6, 7],
  // });

  console.log('test rendering');

  return (
    <div>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
      <p>{obj.address}</p>
    </div>
  );
};

export default Test;
