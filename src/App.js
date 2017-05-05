import React, { Component } from 'react';
import Toolbar from './components/toolbar';
import Editor from './components/editor';
import Footer from './components/footer';
import Popup from './components/popup';
import * as firebase from 'firebase';
import 'js-beautify';
import './App.css';
import * as babel from 'babel-standalone';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      value:"/*Welcome To Lambda Code\nPowerful and lightweight javascript IDE.\nCTRL-Enter to execute code (Windows) and Cmd-Enter (Mac)\nCTRL-b || Cmd-b to beautify code \nUse functions like alert,prompt or console.log to check the outputs. \n<- <-Check gutter for linting. \nYour code will automatically be transpiled to es5 when you execute it. \nYour will be saved to the realtime database and reload when you reopen the tab\nClick share to generate unique id and share it to friends to access real time data sharing.\nEnter the unique id to start synchronizing code \nClick Stop to stop sharing data online*/",
      theme:"merbivore",
      change:true,
      show:true,
      test:false,
      popshow:false,
    }
    this.closepop = this.closepop.bind(this)
    this.onchange = this.onchange.bind(this)
    this.execute = this.execute.bind(this)
    this.changetheme = this.changetheme.bind(this)
    this.empty = this.empty.bind(this)
    this.transpile = this.transpile.bind(this)
    this.evalit = this.evalit.bind(this)
    this.update = this.update.bind(this)
    this.share = this.share.bind(this)
    this.realtime = this.realtime.bind(this)
    this.reset = this.reset.bind(this)
    this.login = this.login.bind(this)
    this.statechange = this.statechange.bind(this)
    this.beautifier = this.beautifier.bind(this)
  }
  componentWillMount(){
    this.login()
  }
  componentDidMount(){
    this.statechange()
  }
  statechange(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        localStorage.xuid = user.uid
        if(localStorage.index==1){
          firebase.database().ref().child('users/'+user.uid).set({
            "value" : this.state.value,
            "change" : false
          })
          localStorage.removeItem('index')
        }
        else{
          localStorage.index++
        }
      }
      else {
        console.log('User logged out')
      }
    }.bind(this));
  }
  login(){
    if(!localStorage.xuid){
      firebase.auth().signInAnonymously().catch(function(error) {
        if(error) console.log(error.message)
      })
      localStorage.index=0
    }
    else{
      this.update()
    }
  }
  update(){
    if(localStorage.xuid){
      firebase.database().ref().child('users/'+localStorage.xuid).on('value' , snap => {
        this.setState({ value : snap.val().value , change : snap.val().change })
      })
    }
  }
  share(){
    this.setState({ popshow : true })
    this.update()
  }
  realtime(key){
    this.setState({ show : false })
    localStorage.removeItem('xuid')
    localStorage.xuid=key
    this.update()
  }
  reset(){
    this.setState({ show:true })
    var user = firebase.auth().currentUser
    localStorage.removeItem('xuid')
    localStorage.xuid=user.uid
    location.reload()
  }
  onchange(code){
    firebase.database().ref().child('users/'+localStorage.xuid+'/value').set(code)
    this.setState({ value : code })
  }
  transpile(value , callback){
    const beautify = require('js-beautify').js_beautify
    let code = babel.transform(value, {presets:['es2015']}).code
    let bcode = beautify(code)
    firebase.database().ref().child('users/'+localStorage.xuid+'/value').set(bcode)
    callback(bcode)
  }
  execute(){
    this.transpile(this.state.value, (code) => {
        this.setState({ value : code } , this.evalit)
    })
  }
  beautifier(){
    const beautify = require('js-beautify').js_beautify
    this.setState( { value : beautify(this.state.value) } )
  }
  evalit = (code = this.state) => {
    setTimeout(()=>{
      eval(code.value)
    },10)
  }
  changetheme(value){
    this.setState({ theme : value })
  }
  closepop(){
    this.setState({ popshow : false })
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
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            >
            {this.state.popshow===true && <Popup uid={localStorage.xuid} closepop={this.closepop}/>}
          </ReactCSSTransitionGroup>
          <div className="center">
            <Editor value={this.state.value} onchange={this.onchange} theme={this.state.theme} empty={this.empty} beautifier={this.beautifier} execute={this.execute}/>
          </div>
          <div >
          <Footer share={this.share} popshow={this.state.popshow} realtime={this.realtime} reset={this.reset} show={this.state.show}/>
          </div>
        </div>
    );
  }
}

export default App;
