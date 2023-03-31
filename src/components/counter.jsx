import React, { Component } from "react";
class Counter extends Component {
  // must render method
  render() {
    // Every component has props,thus we can set values in state
    // property which is an JS object
    console.log("Counter- rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.changeBadge()}>{this.showCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counterTogether)}
            className="btn btn-secondary btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counterTogether)}
            className="btn btn-secondary btn-sm m-1"
            disabled={this.props.counterTogether.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counterTogether.id)}
            className="btn btn-danger btn-sm m-1"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  showCount() {
    const { value } = this.props.counterTogether;
    return value === 0 ? "Zero" : value;
  }
  changeBadge() {
    let classes = "badge bg-";
    classes +=
      this.props.counterTogether.value === 0 ? "warning m--2" : "primary m--2";
    return classes;
  }
}

export default Counter;
