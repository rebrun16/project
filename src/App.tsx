
import React from "react";
import "./App.css";

import App1 from "./components/App1";


function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
      </h1>
      <App1/>
    </div>
  );
}

export default App;