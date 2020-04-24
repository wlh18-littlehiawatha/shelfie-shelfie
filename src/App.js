// import './reset.css';
import React, { Component } from 'react';
import './App.css'; // does this line need to be above the other components if I am going to reset the css and have it stored in App.css

import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: []

    }
    // Bind statements
  }

  componentDidMount(){
    

    axios.get('/api/product').then((res) => {
      // console.log(res)
      this.setState({
        inventory: res.data
      })
    })
    
  }


  render() {


    return (
      <div>
        App.js
        <Header />
        <Dashboard />
        {/* I need to pass inventory as a prop down to dashboard here  */}
        <Form />
      </div>
    )
  }
}

export default App;

