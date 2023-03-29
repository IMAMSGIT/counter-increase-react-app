import React, { Component } from "react";
class Counter extends Component {
  // must render method
  render() {
    // Every component has props,thus we can set values in state
    // property which is an JS object

    return (
      <div>
        {this.props.children}
        <span className={this.changeBadge()}>{this.showCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counterTogether)}
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
    const { value } = this.props.counterTogether;
    return value === 0 ? "Zero" : value;
  }
  changeBadge() {
    let classes = "badge bg-";
    classes +=
      this.props.counterTogether.value === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }
}

export default Counter;
