import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Max extends React.Component {
  render() {
    return (
      <div className="max">
        <h1>title 1</h1>
        <h2>title2</h2>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Max />,
  document.getElementById('root')
);
