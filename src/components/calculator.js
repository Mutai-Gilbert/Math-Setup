import { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

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
    <div className="calculator-wrap">
      <div className="calculator">
        <div className="button output">
          {total}
          {operation}
          {next}
        </div>

        <Button handleClick={handleClick} label="AC" />
        <Button handleClick={handleClick} label="+/-" />
        <Button handleClick={handleClick} label="%" />
        <Button handleClick={handleClick} label="÷" />
        <Button handleClick={handleClick} label="7" />
        <Button handleClick={handleClick} label="8" />
        <Button handleClick={handleClick} label="9" />
        <Button handleClick={handleClick} label="x" />
        <Button handleClick={handleClick} label="4" />
        <Button handleClick={handleClick} label="5" />
        <Button handleClick={handleClick} label="6" />
        <Button handleClick={handleClick} label="-" />
        <Button handleClick={handleClick} label="1" />
        <Button handleClick={handleClick} label="2" />
        <Button handleClick={handleClick} label="3" />
        <Button handleClick={handleClick} label="+" />
        <Button handleClick={handleClick} label="0" />
        <Button handleClick={handleClick} label="." />
        <Button handleClick={handleClick} label="=" />
      </div>
    </div>
  );
};

export default Calculator;
