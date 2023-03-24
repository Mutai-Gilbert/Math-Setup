import { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const answer = calculate({ total, next, operation }, e.target.textContent);
    setTotal(answer.total);
    setNext(answer.next);
    setOperation(answer.operation);
  };
  return (
    <div className="calculator">

      <div className="button output">
        {' '}
        {total}
        {' '}
        {operation}
        {' '}
        {next}
      </div>

      <button onClick={handleClick} type="button" className="button">AC</button>
      <button onClick={handleClick} type="button" className="button">+/-</button>
      <button onClick={handleClick} type="button" className="button">%</button>
      <button onClick={handleClick} type="button" className="button">÷</button>
      <button onClick={handleClick} type="button" className="button">7</button>
      <button onClick={handleClick} type="button" className="button">8</button>
      <button onClick={handleClick} type="button" className="button">9</button>
      <button onClick={handleClick} type="button" className="button">x</button>
      <button onClick={handleClick} type="button" className="button">4</button>
      <button onClick={handleClick} type="button" className="button">5</button>
      <button onClick={handleClick} type="button" className="button">6</button>
      <button onClick={handleClick} type="button" className="button">-</button>
      <button onClick={handleClick} type="button" className="button">1</button>
      <button onClick={handleClick} type="button" className="button">2</button>
      <button onClick={handleClick} type="button" className="button">3</button>
      <button onClick={handleClick} type="button" className="button">+</button>
      <button onClick={handleClick} type="button" className="button zero">0</button>
      <button onClick={handleClick} type="button" className="button">.</button>
      <button onClick={handleClick} type="button" className="button orange">=</button>

    </div>
  );
};

export default Calculator;
