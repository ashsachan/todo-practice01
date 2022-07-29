import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";
import Data from "./data.json"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    todos: [...Data]};
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);

  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !==id)
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.remove}/>;
    });
    return (
      <div className='TodoList'>
        <h1>
          To Do List! <span>Dream!, Set Goal! and Take Action!.</span>
        </h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
