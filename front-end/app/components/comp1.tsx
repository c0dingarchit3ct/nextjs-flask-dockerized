// create a component that takes a parameter and sends it as parameter to an API call and displays the result
'use client';
import React, { useState, FC } from 'react';
import { apiCall } from '../api/apiCall';

interface Comp1Props {
   param: string; // or any other type that 'param' should be
}

export const Comp1: FC<Comp1Props> = ({ param }) => {
  const [result, setResult] = useState<any[]>([]);

  const handleClick = async () => {
    console.log (" in the handle click function");
    const res = await apiCall(param);
    setResult(res);
  };

  return (
    <div>
      <button onClick={handleClick}>Call API</button>
      <div>{result}</div>
      // display the result in array format
      <div>{result && result.map((r: any) => <div>{r}</div>)}</div>
    </div>
  );
};
