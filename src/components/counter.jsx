import React, { Component } from "react";
class Counter extends Component {
  // state object to pass data
  stateExample = {
    countNow: 44,
  };
  // must render method

  handleIncrement = () => {
    // To update the value by clicking the Increment button
    // We have to call the built in setState method
    // and pass a object
    this.setState({ justName: this.stateExample.countNow++ });
  };

  render() {
    return (
      <div>
        <span className={this.changeBadge()}>{this.showCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  showCount() {
    return this.stateExample.countNow === 0
      ? "Zero"
      : this.stateExample.countNow;
  }
  changeBadge() {
    let classes = "badge bg-";
    classes += this.stateExample.countNow === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }
}

export default Counter;
