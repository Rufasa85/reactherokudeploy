import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    name:"joe"
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    if(this.state.count>0){
      this.setState({ 
        count: this.state.count - 1, 
        name:"Adam"
      });
    }
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">{this.state.name}'s Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={this.handleDecrement}>
           Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
