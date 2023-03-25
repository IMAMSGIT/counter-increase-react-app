import React, { Component } from "react";
class Counter extends Component {
  // state object to pass data
  stateExample = {
    countNow: this.props.counterTogether.value,
  };
  // must render method

  handleIncrement = (product) => {
    this.setState({ justName: this.stateExample.countNow++ });
  };

  render() {
    // Every component has props,thus we can set values in state
    // property which is an JS object

    return (
      <div>
        {this.props.children}
        <span className={this.changeBadge()}>{this.showCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.countNow)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counterTogether.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
