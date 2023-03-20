import React, { Component } from "react";
class Counter extends Component {
  // special state property/object render method needs
  state = {
    count: 0,
    // rendering list
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  // render method
  render() {
    return (
      <div>
        {/* /* image added */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>

        {/* Handling events */}
        {/* and when arrow function has parameters */}
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* Rendering list */}
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {this.renderTags()}

        {/* Conditional rendering */}
        {this.state.tags.length === 0 && "Please create a new tag"}
      </div>
    );
  }

  // Event handler function for button clicked
  handleIncrement = (product) => {
    // check to all are okay
    // console.log("Increment clicked", this);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-1 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // holding state variables value
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
