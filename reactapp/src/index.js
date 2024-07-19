import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Course from './basics/Course';
import Hello from './basics/Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Course />
  </React.StrictMode>
);
