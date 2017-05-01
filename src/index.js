import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import './index.css';

var config = {
  apiKey: "AIzaSyBSdKT9TMbs3DQtHecs52BbSo4pN4sFRnc",
  authDomain: "lambda-code-bcb9a.firebaseapp.com",
  databaseURL: "https://lambda-code-bcb9a.firebaseio.com",
  projectId: "lambda-code-bcb9a",
  storageBucket: "lambda-code-bcb9a.appspot.com",
  messagingSenderId: "422976253303"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
