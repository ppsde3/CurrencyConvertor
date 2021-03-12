import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './components/SignIn';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SignIn/>
  </React.StrictMode>,
  document.getElementById('root')
);