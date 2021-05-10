import React,{ useState, useEffect } from 'react';
import './App.css';

function App() {
  const [Number, SetNumber] = useState('');
  const [Mode, SetMode] = useState("isPrime");
  const [Ans, SetAns] = useState(false);

  useEffect(() => {
    // Move func isPrime,isFibonacci inside to avoid the warning
    const isPrime = num => {
      for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
    }
    const isPerfectSquare = x =>{
      let s = parseInt(Math.sqrt(x));
      return (s * s === x);
    }
    const isFibonacci = n =>{
      return isPerfectSquare(5 * n * n + 4) ||
             isPerfectSquare(5 * n * n - 4);
    }
 
    
    if (Mode === "isPrime") {
      SetAns(isPrime(Number))
    }
    else{
      SetAns(isFibonacci(Number))
    }
  }, [Number,Mode]);

  
  const handleChange = (e) =>{
    SetNumber(e.target.value)
  }


 


  return (
    <div className="container">
      <div className='left'>
        <input type='text' value={Number} onChange={handleChange}></input>
      </div>

      <div className='mid'>
        <select onChange={ (e) =>{ SetMode(e.target.value)}}>
          <option value='isPrime'>isPrime</option>
          <option value='isFibonacci'>isFibonacci</option>
        </select>
      </div>

      <div className='right'>
        {Ans.toString()}
      </div>
    </div>
  );
}

export default App;
