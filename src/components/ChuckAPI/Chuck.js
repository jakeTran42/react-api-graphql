import React, { Component } from 'react'

class Chuck extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.chuck.identifier} - {this.props.chuck.joke}
        </div>
      </div>
    )
  }
}

export default Chuck