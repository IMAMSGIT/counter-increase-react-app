import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    // object destructuring
    const { onReset, countersPass, onDelete, onIncrements, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {countersPass.map((cPass) => (
          <Counter
            key={cPass.id}
            // inside {}  naming is important
            onIncrement={onIncrements}
            onDelete={onDelete}
            onDecrement={onDecrement}
            // counterTogether captures all counterPass
            counterTogether={cPass}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
