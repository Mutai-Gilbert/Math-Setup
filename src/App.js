import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import FetchTheQuote from './api/quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="quotesItems">
        <div className="fitnessquote">
          <FetchTheQuote />

        </div>

        <div className="calculator-wrap">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
