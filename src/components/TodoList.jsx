import React, { Component } from "react";
import Item from "./TodoItem";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <section>
        <h3>Todo List</h3>
        <Item />
      </section>
    );
  }
}

export default TodoList;
