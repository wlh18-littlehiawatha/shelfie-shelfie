import React, { Component } from 'react';

import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: []

    }
    // Bind statements
  }


  render() {


    return (
      <div>
        App.js
        <Header />
        <Dashboard />
        <Form />
      </div>
    )
  }
}

export default App;

