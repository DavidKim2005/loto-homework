import { useState } from 'react';
import './App.css';
import Circle from "./Circle/circle"

function App() {

  const [number, setNumber] = useState<number[]>([
    { number: 5 },
    { number: 11 },
    { number: 18 },
    { number: 25 },
    { number: 34 }
  ]);

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

    const changeNumber = () => {
      const newNumbers = number.map(() => ({ number: getRandomNumber(5, 36) }));
      setNumber(newNumbers);
    };
    
  return (
    <div className='App'>
      <div className="circlesBox">
        <Circle number={number[0].number} />
        <Circle number={number[1].number} />
        <Circle number={number[2].number} />
        <Circle number={number[3].number} />
        <Circle number={number[4].number} />
      </div>
      <div>
        <button className='changeBtn' onClick={changeNumber}>Change number</button>
      </div>
    </div>
  );
}

export default App
