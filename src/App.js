import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { isTemplateElement } from '@babel/types';

const data = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: true
}];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: data
    }
    this.toggleFinished = this.toggleFinished.bind(this);
  }

  addTask = taskName => {
    console.log("Add Item: ", taskName);
    this.setState({
      todo: [
        ...this.state.todo,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  }

  clearFinished = () => {
    console.log("ClearFinished");
    this.setState({
      todo: this.state.todo.filter(task => {
        return !task.completed;
      })
    });
  };

  toggleFinished(itemId) {
    console.log("toggleFinished: ", itemId);
    console.log(this.state);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  }


  render() {
    
    return (
      <div>
        <TodoList 
        todo={this.state.todo}
        toggleFinished={this.toggleFinished}
        />
        <ToDoForm 
        addItem={this.addTask}
        clearFinished={this.clearFinished}
        />
      </div>
    );
  }
}

export default App;
