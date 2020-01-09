import React, { Component } from 'react'
import Modal from './Modal'
export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    render() {
        return (
            <div>
              <h1>React Modal</h1>
                <button type="button" onClick={this.showModal}>
                open
                </button>
                <Modal show={this.state.show} handleClose={this.hideModal} />
            </div>
        )
    }
}

export default Dashboard
