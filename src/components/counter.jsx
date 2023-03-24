import React, { Component } from "react";
class Counter extends Component {
  // state object to pass data
  stateExample = {
    countNow: 1,
    tags: ["tag1", "tag2", "tag3"],
  };
  // must render method
  render() {
    return (
      <div>
        <span className={this.showColorOrWarning()}>{this.showCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.stateExample.tags.map((oneTag) => (
            <li key={oneTag}>{oneTag}</li>
          ))}
        </ul>
      </div>
    );
  }

  // To show zero or count
  showCount() {
    // Object destructuring
    // set alias for countNow as count
    const { countNow: count } = this.stateExample;
    return count === 0 ? "Zero" : count;
  }

  showColorOrWarning() {
    let classNames = "badge bg-";
    classNames +=
      this.stateExample.countNow === 0 ? "warning m-2" : "primary m-2";
    return classNames;
  }
}

export default Counter;
