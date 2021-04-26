import React, {Component} from 'react';

const tasks = ['acordar', 'tomar água' , 'almoçar' , 'jantar'];

const task = () => {
  return (
    <ol>{tasks.map((task) => <li>{task}</li>)}</ol>);
}

class Exercise1 extends Component {
  render() {
   return task();
  }
}

export default Exercise1;
