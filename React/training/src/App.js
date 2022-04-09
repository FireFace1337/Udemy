import {Component} from "react";


import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: 'Увеличить возраст',
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  comitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
  }


  render() {
    const {name, surname, link} = this.props;
    const {position, years, text} = this.state;

    return (
      <div>
        <h1>My name is {name}, surname — {surname}, 
            age — {years}, 
            position — {position} </h1>
        <button onClick={this.nextYear}>{text}</button>
        <br/>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.comitInputChanges} />
        </form>
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
