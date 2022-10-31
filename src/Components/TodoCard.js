import React, { Component } from "react";
import "./task.css";

class TodoCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="checkbox"
          name=""
          id=""
          checked={this.props.TASK.isdone}
          onChange={() => this.props.handleCheck(this.props.TASK.id)}
        />
        <h1 className={this.props.TASK.isdone ? "done" : "undone"}>
          {this.props.TASK.name}
        </h1>
        <button>Edit</button>
        <button onClick={() => this.props.handleDelete(this.props.TASK.id)}>
          X
        </button>
      </div>
    );
  }
}

export default TodoCard;
