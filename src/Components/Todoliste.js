import React, { Component } from "react";
import TodoCard from "./TodoCard";

class Todoliste extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.list.map((element, i) => (
          <TodoCard
            TASK={element}
            key={i}
            handleDelete={this.props.handleDelete}
            handleCheck={this.props.handleCheck}
            handelEdit={this.props.handelEdit}
          />
        ))}
      </div>
    );
  }
}

export default Todoliste;
