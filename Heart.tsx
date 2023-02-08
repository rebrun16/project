import React from 'react';

import '../heart.css';

type Props = {}

const Heart = (props: Props) => {
  return (
    <div className="w-2 h-2"> 
      <div id="heart"></div>
    </div>
  );
};

export default Heart;