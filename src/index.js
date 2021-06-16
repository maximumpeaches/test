import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Max extends React.Component {
  render() {
  	// you can put any html you want between
  	// the div tags below
    return (
      <div className="max">
       
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Max />,
  document.getElementById('root')
);
