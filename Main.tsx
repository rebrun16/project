import React from 'react';

import data from '../data.json';

import List from './List';
import List1 from './List1';
import List2 from './List2';

import Navbar from './Navbar';
import { SimpleSlider } from './Slider/SimpleSlider/SimpleSlider';


type Props = {}

const Main = (props: Props): JSX.Element => {
  return (
    <div className="flex justify-between">
      <div className="w-1/4 bg-white ml-5 mt-5 sticky top-0">
        <Navbar data={data}/>
      </div>
      <div className="w-3/4 bg-white">
        <SimpleSlider/>
        <List/>
        <List1/>
        <List2/>
      </div>
    </div>
  );
};

export default Main;