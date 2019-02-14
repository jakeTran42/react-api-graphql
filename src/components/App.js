import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import ChuckJoke from './ChuckAPI/ChuckJoke'

class App extends Component {
  render() {
    return (
      <ChuckJoke />
    );
  }
}

export default App;
