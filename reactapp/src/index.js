import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './routing/Main';

var products = [
     {name : 'Bose Speakers', price : 30000}, 
     {name : 'Logitech Mouse', price : 10000}, 
     {name : 'Dell 21 Inch Monitor', price : 15000}
];


//<Products products={products}  company="Xyz Company" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Main />
  </React.StrictMode>
);
