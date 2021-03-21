import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    // imageUrl: "https://picsum.photos/200",
    // tags: ["tag1", "tag2", "tag3"],
  };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    const {onIncrement, counter, onDelete } = this.props
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasess()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasess() {
    const {counter } = this.props
    let clasess = "badge m-2 badge-";
    clasess += counter.value === 0 ? "warning" : "primary";
    return clasess;
  }

  formatCount() {
    const { counter } = this.props;
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
