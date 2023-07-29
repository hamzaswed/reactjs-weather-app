import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
      name: "hamza",
    };
  }

  decrementHandler() {
    this.setState(function (curState) {
      return { count: curState.count - 1 };
    });
  }

  incrementHandler() {
    this.setState(function (curState) {
      return { count: curState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrementHandler.bind(this)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.incrementHandler.bind(this)}>+</button>
      </div>
    );
  }
}

export default Counter;
