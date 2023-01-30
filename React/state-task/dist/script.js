function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "increment",








    () => {
      this.setState(state => ({
        counter: state.counter < 50 ? state.counter + 1 : state.counter }));

    });_defineProperty(this, "decrement",

    () => {
      this.setState(state => ({
        counter: state.counter > -50 ? state.counter - 1 : state.counter }));

    });_defineProperty(this, "random",

    () => {
      this.setState(state => ({
        counter: 50 - Math.floor(Math.random() * 101) }));

    });_defineProperty(this, "reset",

    () => {
      this.setState(state => ({
        counter: this.props.counter }));

    });this.state = { counter: this.props.counter };} // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  render() {
    const { counter } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", { class: "app" }, /*#__PURE__*/
      React.createElement("div", { class: "counter" }, this.state.counter), /*#__PURE__*/
      React.createElement("div", { class: "controls" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.increment }, "INC"), /*#__PURE__*/
      React.createElement("button", { onClick: this.decrement }, "DEC"), /*#__PURE__*/
      React.createElement("button", { onClick: this.random }, "RND"), /*#__PURE__*/
      React.createElement("button", { onClick: this.reset }, "RESET"))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, { counter: 0 }), document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props 
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов