import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v1 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up",
      },
      {
        id: 1,
        title: "make breakfast",
      },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (event) => {
    console.log("handle change");
  };
  handleSubmit = (event) => {
    console.log("handle submit");
  };
  clearList = () => {
    console.log("handle submit");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
