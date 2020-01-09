import React, { Component } from 'react'
import './Modal.css'
export class Modal extends Component {
  render() {
    return (
      <div style={this.props.show ? {display: 'block'} : {display: 'none'}}>
      <div className="modal-main">
        <h1>Hello world</h1>
        <button onClick={this.props.handleClose}>close</button>
      </div>
    </div>
    )
  }
}

export default Modal
