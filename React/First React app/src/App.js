import {Component} from 'react';
import './App.css';

// компонента #1
const Header = () => {
  return <h2>Hello World!</h2>
}

// компонента #2 
// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   return <input 
//           placeholder={holder} 
//           type="text" 
//           style={styledField}/>
// }

// Компонента #2 Классовый подход (а не функциональный)
class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };

    return <input 
            placeholder={holder} 
            type="text" 
            style={styledField}/>
  }
}
// Классовый подход (а не функциональный)

// компонента #3
function Btn() {
  const text = 'Log in';
  const logged = false;
  // const res = () => {
  //   return 'Log in';
  // }
  // const p = <p>Log in</p>;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
