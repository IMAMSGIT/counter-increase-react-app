import React, { Component } from "react";
class Counter extends Component {
  // state object to pass data
  stateExample = {
    countNow: 1,
    tags: [],
  };
  // must render method

  conditionalRender() {
    if (this.stateExample.tags.length === 0) return <p>There are no tags!!</p>;
    return (
      <ul>
        {this.stateExample.tags.map((oneTag) => (
          <li key={oneTag}>{oneTag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.stateExample.tags.length === 0 && "Please add one element"}
        {this.conditionalRender()}
      </div>
    );
  }
}

export default Counter;
