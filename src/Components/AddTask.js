import React, { Component } from 'react'

 class AddTask extends Component {
    constructor(props) {
      super(props)
    
      this.state={

        titel:'',
      }
    }
    Handelchange=(event)=>{
        this.setState({titel:event.target.value})
    }
    AddTask=()=>{
        this.props.HandelAdd({name:this.state.titel.trim(),isdone:false,id:Date.now()})
        this.setState({titel:''})
    }
  render() {
    return (
      <div>
        <input type="text" name="" id=""  onChange={this.Handelchange} value={this.state.titel}/>
        <button onClick={this.state.titel.trim()?this.AddTask:()=>alert('titel ')} >Add</button>
      </div>
    )
  }
}

export default AddTask