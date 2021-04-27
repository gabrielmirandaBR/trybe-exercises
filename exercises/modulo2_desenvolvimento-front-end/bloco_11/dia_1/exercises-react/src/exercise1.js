import React, {Component} from 'react';

const tasks = ['acordar', 'tomar água' , 'almoçar' , 'jantar'];

class Task extends Component {
  render() {
   return <ol>{tasks.map((task) => <li>{task}</li>)}</ol>;
  }
}

export default Task;
