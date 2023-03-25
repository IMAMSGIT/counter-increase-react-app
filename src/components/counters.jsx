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

  handleDelete = (counterID) => {
    const counters = this.state.countersPass.filter(
      (myCounter) => myCounter.id !== counterID
    );
    this.setState({ countersPass: counters });
  };
  render() {
    return (
      <div>
        {this.state.countersPass.map((cPass) => (
          // valuC becomes a property of this.props
          <Counter
            key={cPass.id}
            onDelete={this.handleDelete}
            // counterTogether captures all counterPass
            counterTogether={cPass}
            // valueC={cPass.value}
            // id={cPass.id}
          >
            <h4>Counter #{cPass.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
