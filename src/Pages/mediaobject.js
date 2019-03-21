import React, { Component } from 'react'

class Mediaobject extends Component {
  render() {
    return (
      <div>
        <div className="media">
            <div className="media-body">
            <h5 class="mt-0 mb-1">{this.props.name}</h5>
            <p>{this.props.phonenumber}</p>
            </div>
            <img src={this.props.avatar} className="ml-3" alt="..."></img>
        </div>
      </div>
    )
  }
}

export default Mediaobject