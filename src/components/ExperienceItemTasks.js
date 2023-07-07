import React, { Component } from "react";
import uniqid from "uniqid";
import ExperienceTaskDescription from "./ExperienceTaskDescription";

class ExperienceItemTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          text: "Do some good work",
          id: uniqid(),
        },
        {
          text: "Code some stuff",
          id: uniqid(),
        },
      ],
    };

    this.editTask = this.editTask.bind();
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { text: "", id: uniqid() }],
    }));
  };

  editTask = (inputId, newText) => {
    let arr = [];
    this.state.tasks.forEach((task) => {
      if (task.id === inputId) {
        task.text = newText;
      }
      arr.push(task);
    });
    this.setState({
      tasks: arr,
    });
  };

  render() {
    const { editMode } = this.props;
    return (
      <div className="task-description-wrapper">
        <ul className="task-description-list">
          {this.state.tasks.map((task) => {
            return (
              <ExperienceTaskDescription
                key={task.id}
                editTask={this.editTask}
                task={task}
                editMode={editMode}
              />
            );
          })}
        </ul>
        {!editMode ? <></> : <button className="btn-add" onClick={this.addTask}>+</button>}
      </div>
    );
  }
}

export default ExperienceItemTasks;
