import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const elem = <h2>Hello World!</h2>;

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

const text = 'Hello World!';

const elem = (
  <div>
      <h2 className='text'>Текст: {text}</h2>
      <input type="text" />
      <button tabIndex="0">Click</button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);

