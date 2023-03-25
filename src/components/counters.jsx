import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    countersPass: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 6 },
      { id: 4, value: 70 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.countersPass.map((cPass) => (
          // valuC becomes a property of this.props
          <Counter key={cPass.id} valueC={cPass.value}>
            <h4>Counter #{cPass.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
