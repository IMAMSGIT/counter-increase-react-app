import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    countersPass: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 6 },
      { id: 4, value: 7 },
    ],
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
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.countersPass.map((cPass) => (
          // valuC becomes a property of this.props
          <Counter
            key={cPass.id}
            onDelete={this.handleDelete}
            // counterTogether captures all counterPass
            counterTogether={cPass}
            // valueC={cPass.value}
            // id={cPass.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
