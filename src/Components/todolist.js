import React, { Component } from "react";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {};
    this.filterToDos = this.filterToDos.bind(this);
  }

  handleInput = (e) => {
    e.preventDefault();
    const val = this.props.post;
    if (val == "all") {
      const taskName = this.refs.taskInput.value;
      this.props.addItem(taskName);
      this.refs.taskInput.value = "";
      this.refs.taskInput.focus();
    } else if (val == "completed") {
      const taskName = this.refs.taskInput.value;
      this.props.addcompleted(taskName);
      this.refs.taskInput.value = "";
      this.refs.taskInput.focus();
    } else if (val == "uncompleted") {
      const taskName = this.refs.taskInput.value;
      this.props.adduncompleted(taskName);
      this.refs.taskInput.value = "";
      this.refs.taskInput.focus();
    }
    console.log("dsds");
  };

  deleteItem = () => {
    const taskName = this.refs.taskInput.value;
    this.props.deleteitem("delete todolist", taskName);
  };

  filterToDos(e) {
    this.props.onFilterToDos(e.target.value);
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header ">
          <form onSubmit={this.handleInput}>
            <input
              type="text"
              class="todo-input"
              maxlength="40"
              ref="taskInput"
            />
            <button class="todo-button" type="submit">
              <i class="fas fa-plus-square"></i>
            </button>
            <div class="select">
              <select
                name="todos"
                class="filter-todo"
                onClick={this.filterToDos}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoList;
