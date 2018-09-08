import React  from 'react';
import Component2 from './Component2';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      times: 0
    };
    setInterval(() => {
      this.setState((prevState) => {
        return {times: prevState.times + 1};
      });
    }, 1000);
  }
  componentDidMount = async () =>  {
    console.log("componentDidMount");
  }

  shouldComponentUpdate = async (nextProps, nextState, nextContext) => {
    return true;
  }

  componentWillUnmount = async () => {
    console.log("componentWillUnmount");
  }

 componentDidCatch = async (error, errorInfo) => {

 }
  render() {
    console.log("render");
    return (
      <div className="App">
        <h3>Hellop Racrt</h3>
        <p>Day la : {this.state.times}</p>
        <Component2 timesFromParent={this.state.times}></Component2>
      </div>
    );
  }
}

export default App;
