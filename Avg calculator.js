import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setnum] = useState('');
  const [avg, setavg] = useState(null);

  const handlingChange = (event) => {
    setnum(event.target.value);
  };

  const calculateAverage = () => {
    const numArray = num.split(',').map(num => parseFloat(num.trim()));
    const total = numArray.reduce((acc, curr) => acc + curr, 0);
    const avg = total / numArray.length;
    setavg(avg);
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers separated by commas"
        value={num}
        onChange={handlingChange}
      />
      <button onClick={calculateAverage}>Calculate Average</button>
      {avg !== null && (
        <div>
          <h2>Average: {avg}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
