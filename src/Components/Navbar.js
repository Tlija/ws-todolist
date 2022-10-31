import React,{Component} from "react";
export class Navbar extends Component{
    render=()=>(
        <div className="col-12">
        <h2 className="bg-primary text-white text-center p2">
          {this.props.username} To do list
        </h2>
        {/* <button className="btn btn-secondary m-2">Change</button> */}
      </div>
    );
}