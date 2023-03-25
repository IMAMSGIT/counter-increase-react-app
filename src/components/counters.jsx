import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    countersPass: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.countersPass.map((cPass) => (
          <Counter key={cPass.id}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
