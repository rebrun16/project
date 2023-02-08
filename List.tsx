import React from 'react';

import Card from './Card';

type Props = {}

const List = (props: Props) => {
  return (
    <>
      <h1 className="flex justify-start ml-3 text-xl">Последние просмотренные товары</h1>
      <div className="flex justify-start">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button className=" w-56 h-12 border-black border-solid border-2 mb-5 text-blue-500 hover:text-red-300">ПОКАЗАТЬ ЕЩЁ</button>
    </>
  );
};

export default List;