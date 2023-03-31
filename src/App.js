import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import FetchTheQuote from './api/quotes';
import Home from './components/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="navigation"
        >
          <h1>Math Magician</h1>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/calculator" className="link">Calculator</Link>
            </li>
            <li>
              <Link to="/quote" className="link">Quote</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<FetchTheQuote />} />
        </Routes>
      </>
    );
  }
}

export default App;
