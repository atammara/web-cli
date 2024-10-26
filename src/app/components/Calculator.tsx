"use client";
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput(prev => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 bg-gradient-to-br from-custom-light to-custom-dark p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-5 text-white">Calculator</h1>
      <div className="bg-white w-72 p-4 rounded-lg shadow-lg">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-12 text-right text-2xl border-2 border-gray-300 rounded-lg mb-2 p-2 bg-gray-100"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((value) => (
            <button key={value} onClick={() => handleButtonClick(value)} className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-200">
              {value}
            </button>
          ))}
          {["4", "5", "6", "*"].map((value) => (
            <button key={value} onClick={() => handleButtonClick(value)} className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-200">
              {value}
            </button>
          ))}
          {["1", "2", "3", "-"].map((value) => (
            <button key={value} onClick={() => handleButtonClick(value)} className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-200">
              {value}
            </button>
          ))}
          {["0", ".", "=", "+"].map((value) => (
            <button key={value} onClick={value === "=" ? calculateResult : () => handleButtonClick(value)} className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-200">
              {value}
            </button>
          ))}
          <button onClick={clearInput} className="col-span-4 bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition duration-200">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
