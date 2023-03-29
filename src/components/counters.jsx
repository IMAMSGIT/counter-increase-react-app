import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, countersPass, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {countersPass.map((cPass) => (
          <Counter
            key={cPass.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
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
