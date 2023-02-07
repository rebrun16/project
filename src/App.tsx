import React from 'react';

import './App.css';
import Header1 from './components/Header/Header';


function App() {
  return (
    <>
      <div className="none w-full h-14 mx-auto flex justify-center items-center  bg-green-600">
        <h1 className="flex justify-center items-center text-3xl font-bold text-black-600">Распродажа ко дню влюбленых</h1>
      </div>
      <Header1/>
    </>
  );
}

export default App;