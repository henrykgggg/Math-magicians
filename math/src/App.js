import React from 'react';

import './App.css';
import Calculator from './component/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cal = [];
  }

  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
