import React, { Component } from 'react';
import Toolbar from './components/toolbar';
import Editor from './components/editor';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:"/*Enter Your Javascript Code. \nUse functions like alert,prompt or console.log to check the outputs. \nClick the Execute Button to execute your code. \nCheck gutter for linting*/",
      theme:"ambiance",
      change:true
    }
    this.onchange = this.onchange.bind(this)
    this.execute = this.execute.bind(this)
    this.changetheme = this.changetheme.bind(this)
    this.empty = this.empty.bind(this)
  }
  onchange(code){
    this.setState({ value : code })
  }
  execute(){
    eval(this.state.value)
  }
  changetheme(value){
    this.setState({ theme : value })
  }
  empty(){
    if(this.state.change === true){
      this.setState({ value:'' })
      this.setState({ change:false })
    }
  }
  render() {
    return (
        <div className="container">
          <Toolbar changetheme={this.changetheme}/>
          <div className="center">
            <Editor value={this.state.value} onchange={this.onchange} theme={this.state.theme} empty={this.empty}/>
          </div>
          <div >
            <Footer execute={this.execute}/>
          </div>
        </div>
    );
  }
}

export default App;
