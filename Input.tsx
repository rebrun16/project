import React from 'react';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchIcon from '@mui/icons-material/Search';

type Props = {}

const Input = (props: Props) => {
  return (
    <>
      <div className=" h-12 flex rounded-md justify-between w-2/4 bg-white">
        <SearchIcon className="flex items-center mt-4 ml-2 hover:cursor-pointer"/>
        <p className="flex items-center justify-start text-2xl font-bold text-gray-500 pr-20">Я шукаю...</p>
        <KeyboardVoiceIcon className="flex items-center justify-between mt-3 ml-64"/>
        <button className="flex rounded-md justify-end bg-green-400 p-2">Знайти</button>
      </div>
    </>
  );
};

export default Input;