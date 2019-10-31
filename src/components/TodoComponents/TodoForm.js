import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todoName: ""
        };
    }

    handleChanges = e => {
        this.setState({
            todoName: e.target.value
        });
    };

  render(props) {
    return (
      <div className="form-container">
        <form>
            <input 
            placeholder="Complete MVP" 
            onChange={this.handleChanges}
            name="todo"
            type="text"
            value={this.state.todoName} />
            <button type="submit" onClick={e => {
                e.preventDefault();
                if(this.state.todoName == "") {
                    alert("You must enter a todo first!");
                } else {
                    this.props.addItem(this.state.todoName);
                }
                this.setState({
                    todoName: ""
                })
            }}>Add Todo</button>
            <button type="submit" onClick={e => {
                e.preventDefault();
                this.props.clearFinished();
            }}>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
