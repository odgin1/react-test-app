import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import UserGreetingConditionalRendering from './components/UserGreetingConditionalRendering';
import Search from './components/ShowElement';
import TestButton from './materialUI/TestButton';
import Select from './materialUI/Select';

class App extends Component {
  render(){
    return (
      <div className="App">

        <br/>===================================
        <br/>Form handling
        <br/>===================================
        <Form />

        <br/>===================================
        <br/>Conditional Rendering
        <br/>===================================
        <UserGreetingConditionalRendering/>

        <br/>===================================
        <br/>Show Element
        <br/>===================================
        <Search/>

        <br/>===================================
        <br/>Material-UI Test Button
        <br/>===================================
        <br/><TestButton/>

        <br/>===================================
        <br/>Material-UI Select
        <br/>===================================
        <br/><Select/>

      </div>
    )
  }
}

export default App;
