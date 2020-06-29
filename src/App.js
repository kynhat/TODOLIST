import React, { Component } from 'react'
import TodoList from '../src/Components/todolist'
import TodoItems from '../src/Components/todoItem'
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      completed:[],
      uncompleted:[],
      filterCriteria: 'all'  

    };
    this.filterToDos = this.filterToDos.bind(this);

  }

  addItem = (taskName) => {
    const newTask = {
        text: taskName,
        key: Date.now()
    }
    if (taskName !== null && taskName !== '') {
        const items = [...this.state.items, newTask]
        this.setState({
            items,
        })
      
    }

 
}

addcompleted = (taskName) => {
  const newTask = {
      text: taskName,
      key: Date.now()
  }
  if (taskName !== null && taskName !== '') {
      const completed = [...this.state.completed, newTask]
      this.setState({
          completed,
      })
    
  }
}

  adduncompleted = (taskName) => {
    const newTask = {
        text: taskName,
        key: Date.now()
    }
    if (taskName !== null && taskName !== '') {
        const uncompleted = [...this.state.uncompleted, newTask]
        this.setState({
          uncompleted,
        })
      
    }
  }

deleteItem = (taskName) => {
  const items = [...this.state.items]
  const updatedList = items.filter(item => item.key !== taskName);
  // //update state
  this.setState({ items: updatedList });
}

filterToDos(filterCriteria) {
  this.setState({ filterCriteria });
}

  render() {
    return (
        <div>
        <TodoList
            addItem={this.addItem} 
            addcompleted={this.addcompleted} 
            adduncompleted={this.adduncompleted} 
            onFilterToDos={this.filterToDos}
            post={this.state.filterCriteria}

        />
          <TodoItems 
            entries={this.state.items} 
            completed={this.state.completed} 
            uncompleted={this.state.uncompleted} 
            deleteItem={this.deleteItem}
            post={this.state.filterCriteria}
            />          
        </div>
    )
  }
}

export default App