import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './Child1/Child1'
import Child2 from './Child2/Child2';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Child1 />
          <Child2 />
      </div>
    );
  }
}

export default App;
