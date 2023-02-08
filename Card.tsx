import React from 'react';

import Heart from './Heart';

type Props = {}

const Card = (props: Props) => {
  return (
    <>
      <div className="w-56 h-56 bg-blue-300 flex items-center justify-center border-solid border-black border-2">
        <div>
            <Heart/>
          <img src="" alt="foto"/>
          <p className="text-2xl bold">nike</p>
          <div className="text-decoration-line: line-through text-2xl bold">price ₴</div>
          <div className="text-3xl bold text-red-700">75 ₴</div>
        </div>
      </div>
    </>
  );
};

export default Card;