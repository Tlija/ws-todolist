import React, { Component } from "react";
import AddTask from "./Components/AddTask";
import FilterTask from "./Components/filterTask";
import Todoliste from "./Components/Todoliste";
import "./App.css";

class App extends Component {
  state = {
    list: [
      {
        name: "Html",
        isdone: false,
        id: 0,
      },
      {
        name: "Css",
        isdone: true,
        id: 1,
      },
    ],
    filterList: "All",
  };
  HandelAdd(Newtask) {
    this.setState({ list: [...this.state.list, Newtask] });
  }
  handleDelete = (idtask) => {
    this.setState({ list: this.state.list.filter((el) => el.id !== idtask) });
  };
  handleCheck = (idtask) => {
    this.setState({
      list: this.state.list.map((el) =>
        el.id == idtask ? { ...el, isdone: !el.isdone } : el
      ),
    });
  };
  handleFilter = (statue) => {
    this.setState({
      filterList: statue,
    });
  };
  render() {
    return (
      <div className="App">
        <AddTask HandelAdd={this.HandelAdd.bind(this)} />
        <FilterTask handleFilter={this.handleFilter} />
        <Todoliste
          list={this.state.filterList=='Done'?this.state.list.filter(
            (el)=>el.isdone
          ):
          this.state.filterList=='unDone'?this.state.list.filter(
            (el)=> !el.isdone
          ):
          this.state.list
        }
          handleDelete={this.handleDelete}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default App;
