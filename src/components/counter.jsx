import React, { Component } from "react";
class Counter extends Component {
  // state object to pass data
  stateExample = {
    countNow: 44,
  };
  // must render method

  render() {
    return (
      <div>
        <span className={this.changeBadge()}>{this.showCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
