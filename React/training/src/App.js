import {Component} from "react";


import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: 'Увеличить возраст'
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }


  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years} </h1>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <br/>
        <a href={link}>My profile</a>
      </div>
      )
    }
  }

function App() {
  return (
    <div className="App">
      <WhoAmI name="Max" surname="Lavrov" link="facebook.com"/>
      <WhoAmI name="Andrey" surname="Bagrov" link="vk.com"/>
    </div>
  );
}

export default App;
