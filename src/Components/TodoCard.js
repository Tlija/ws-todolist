import React, { Component } from "react";
import "./task.css";

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      Toggel:false,
      EditName:''
    }
  }
  handelSave=()=>{
    if(this.state.EditName.trim()){ this.props.handelEdit(this.props.TASK.id,this.state.EditName.trim())}
    else{
      alert ('bnj')
    }
    this.setState({
      EditName:'',
      Toggel:false
    })
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

        <button onClick={()=>{this.setState({Toggel:!this.state.Toggel})}}>Edit</button>
        <div className={this.state.Toggel?'EditV':'none'}>
        <input type="text" name="" id=""  value={this.state.EditName}onChange={(e)=>this.setState({EditName:e.target.value})} />
        <button onClick={this.handelSave}>Save</button>
        </div>
        
        <button onClick={() => this.props.handleDelete(this.props.TASK.id)}>
          X
        </button>
      </div>
    );
  }
}

export default TodoCard;
