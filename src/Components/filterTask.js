import React, { Component } from 'react'

 class FilterTask extends Component {
    constructor(props) {
      super(props)
    
     
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.props.handleFilter('Done')}>Done</button>
        <button onClick={()=>this.props.handleFilter('unDone')}>UnDone</button>
        <button onClick={()=>this.props.handleFilter('All')}>ALL</button>
      </div>
    )
  }
}

export default FilterTask