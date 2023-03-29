import NavBar from "./components/navBar";
import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";
class App extends Component {
  //state object
  state = {
    countersPass: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 6 },
      { id: 4, value: 7 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.countersPass];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
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
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
