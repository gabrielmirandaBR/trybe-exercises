import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectTask: undefined,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.selectTask = this.selectTask.bind(this)
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTask(index) {
    const { listTodo } = this.state;
    const task = listTodo[index];
    this.setState({
      selectTask: task
    });
  }

  removeTodo() {
    const { listTodo, selectTask } = this.state;
    const indexTask = listTodo.indexOf(selectTask);
    const newList = listTodo.splice(indexTask, 1)
    this.setState({
      listTodo: [...newList]
    });
  }

  render() {
    const { listTodo, selectTask } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} selectTask={ selectTask } removeTodo={() => this.removeTodo()} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li 
                  key={index + 1} 
                  onClick={() => this.selectTask(index)}
                >
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
