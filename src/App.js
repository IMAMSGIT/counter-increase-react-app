import NavBar from "./components/navBar";
import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";
class App extends Component {
  //state object
  state = {
    countersPass: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // first this method is called
  constructor(props) {
    super(props);
    console.log("App- constructor", this.props);
  }

  //
  componentDidMount = () => {
    console.log("App-mounterd");
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.countersPass];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ countersPass: counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.countersPass];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ countersPass: counters });
  };

  handleReset = () => {
    const reset = this.state.countersPass.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ countersPass: reset });
  };

  handleDelete = (counterID) => {
    const counters = this.state.countersPass.filter(
      (myCounter) => myCounter.id !== counterID
    );
    this.setState({ countersPass: counters });
  };

  //render method
  render() {
    console.log("App- rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounter={
            this.state.countersPass.filter((c) => c.value > 0).length
          }
        ></NavBar>
        <main className="container">
          <Counters
            countersPass={this.state.countersPass}
            onReset={this.handleReset}
            // onIncrements or naming matters
            onIncrements={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
