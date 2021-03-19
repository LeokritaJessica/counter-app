import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () =>{
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasess()}>{this.formatCount()}</span>
        <button onClick={ this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasess() {
    let clasess = "badge m-2 badge-";
    clasess += this.state.count === 0 ? "warning" : "primary";
    return clasess;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
