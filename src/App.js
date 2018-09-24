import React from 'react';
import './App.css';

//App.js

import { Link } from 'react-router-dom';

export const Title = () => {
  return (
      <div className="title">
        <h1>React Router demo</h1>
        <Link to="/list"><button>Show the List</button></Link>
      </div>
  );
};

export const List = () => {
  return (
    <div className="nav">
      <ul>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <Link to="/"><button>Back Home</button></Link>
    </div>
  );
};
