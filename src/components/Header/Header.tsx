import React from 'react';

import Input from '../Input';

type Props = {}

const Header1 = (props: Props) => {
  return (
    <>
      <div className="m-auto flex justify-between items-center bg-black pt-6 text-3xl font-bold text-red-600">
        <div className="w-4/5 flex justify-center items-center">
          <div className="bg-gray-400">
            logo
            <img src="" alt="" />
          </div>
          <button className="bg-gray-500 p-4">catalog</button>
          <Input/>
          <div className="flex bg-slate-500 justify-between m-6">
            <p>eng or ua</p>
            <p>icon1</p>
            <p>icon2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;