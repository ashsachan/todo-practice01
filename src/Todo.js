import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div className="Todo">
        <li className="Todo-task">{this.props.task}</li>
        <div className="Todo-buttons">
          <button onClick={this.handleRemove}>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
