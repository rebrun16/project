import React from 'react';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import Input from './Input';


type Props = {}

const Header1 = (props: Props) => {
  return (
    <>
      <div className=".mx-56 flex bg-black justify-around items-center pt-1 pb-1 text-2xl">
        <div className="w-4/5 flex justify-center items-center">
          <DensityMediumIcon className="text-white m-6 hover:cursor-pointer"/>
          <div className="rounded-md hover:cursor-pointer">
            <img src="/assets/229862237.svg" alt="logo" />
          </div>
          <button className="bg-gray-500 p-2 flex items-center rounded-md m-5">
            <AutoAwesomeMosaicIcon/>
            Catalog
          </button>
          <Input/>
          <div className="flex  p-1 items-center rounded-xl justify-between m-2">
            <p className="flex w-40 text-white ml-10 hover:cursor-pointer"> UA | RU</p>
            <ShoppingCartIcon className="text-white hover:cursor-pointer"/>
            <PersonIcon className="text-white ml-6 hover:cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;