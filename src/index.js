import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MultiFormContext } from './MultiFormContext'

ReactDOM.render(
  <MultiFormContext>
    <App />
  </MultiFormContext>,
  document.getElementById('root')
);
