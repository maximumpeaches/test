import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Max extends React.Component {
  render() {
    return (
      <div className="max">
        <h1>sup bitchezz</h1>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Max />,
  document.getElementById('root')
);
