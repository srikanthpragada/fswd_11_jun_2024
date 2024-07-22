import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloCC from './basics/HelloCC';
import Course from './basics/Course';
import Product from './props/Product'; 
import ProductsList from './props/ProductsList';

var products = [
     {name : 'Bose Speakers', price : 30000}, 
     {name : 'Logitech Mouse', price : 10000}, 
     {name : 'Dell 21 Inch Monitor', price : 15000}
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProductsList products = {products}  company="ABC Company" />
  </React.StrictMode>
);
