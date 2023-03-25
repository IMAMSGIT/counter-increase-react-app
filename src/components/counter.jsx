import React, { Component } from "react";
class Counter extends Component {
  // state object to pass data
  stateExample = {
    countNow: this.props.valueC,
  };
  // must render method

  handleIncrement = (product) => {
    // To update the value by clicking the Increment button
    // We have to call the built in setState method
    // and pass a object
    console.log(product);
    // in setState your chosen name: the updated property name
    this.setState({ justName: this.stateExample.countNow++ });
  };

  render() {
    console.log(this.props);
    // Every component has props,thus we can set values in state
    // property which is an JS object

    return (
      <div>
        {this.props.children}
        <span className={this.changeBadge()}>{this.showCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
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
