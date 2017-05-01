import React, { Component } from 'react';
import Toolbar from './components/toolbar';
import Editor from './components/editor';
import Footer from './components/footer';
import * as firebase from 'firebase';
import './App.css';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      value:"/*Enter Your Javascript Code. \nUse functions like alert,prompt or console.log to check the outputs. \nClick the Execute Button to execute your code. \nCheck gutter for linting. \nYour code will be automatically transpiled to es5 when your execute it. \nYour will be synchronized to the realtime database \nIf reloading please wait for the code to load */",
      theme:"ambiance",
      change:true,
    }
    this.onchange = this.onchange.bind(this)
    this.execute = this.execute.bind(this)
    this.changetheme = this.changetheme.bind(this)
    this.empty = this.empty.bind(this)
    this.transpile = this.transpile.bind(this)
    this.evalit = this.evalit.bind(this)
  }
  componentWillMount(){
    if(localStorage.uid){
      firebase.database().ref().child('users/'+localStorage.uid).once('value' , snap => {
        this.setState({ value : snap.val().value , change : snap.val().change })
      })
    }
  }
  componentDidMount(){
    if(!localStorage.uid){
      firebase.auth().onAuthStateChanged(function(user) {
        firebase.auth().signInAnonymously().catch(function(error) {
          if(error) console.log(error.message)
        })
        if (user) {
          localStorage.uid = user.uid
          firebase.database().ref().child('users/'+user.uid).set({
            "value" : this.state.value,
            "change" : false
          })
        } else {
          console.log('User logged out')
        }
      }.bind(this));
    }
  }
  onchange(code){
    firebase.database().ref().child('users/'+localStorage.uid+'/value').set(code)
    this.setState({ value : code })
  }
  transpile(value , callback){
    let code = window.Babel.transform(value, {presets:['es2015']}).code
    callback(code)
  }
  execute(){
    this.transpile(this.state.value, (code) => {
        this.setState({ value : code } , this.evalit)
    })
  }
  evalit = (code = this.state) => {
    setTimeout(()=>{
      eval(code.value)
    },10)
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
