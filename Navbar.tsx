import React from 'react';

type Props = {}

const names = ["phone", "pc", "pods", "watch", "tools", "sport"];

const Navbar = (props: { data:Props}) => {
  return (
    <div className="flex justify-center bg-cyan-500">
      <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
    </div>
  );
};

export default Navbar;