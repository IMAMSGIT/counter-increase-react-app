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
  render() {
    return (
      <div>
        {this.state.countersPass.map((cPass) => (
          <Counter key={cPass.id} value={cPass.value}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
