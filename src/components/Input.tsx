import React from 'react';

type Props = {}

const Input = (props: Props) => {
  return (
    <>
      <div className=" flex justify-between w-2/4 bg-white">
        <p className="flex items-center justify-start text-3xl font-bold text-blue-600">i am search</p>
        <button className="flex justify-end bg-green-400 p-4">znaiti1</button>
      </div>
    </>
  );
};

export default Input;