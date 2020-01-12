import React, { Component } from 'react'
import './Modal.css'
import './Bookbox.css'
export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
        likebuttonlogo: './heart.svg',
        downloadbuttonlogo: './down-arrow.svg'
      
    }
}
changelikeStyle = (event) => {
  if (this.state.likebuttonlogo == './heart.svg') {
    this.setState({likebuttonlogo: './heart-red.svg'})
  }
  else {
    this.setState({likebuttonlogo: './heart.svg'})
  }
}
changedownloadStyle = (event) => {
  this.setState({downloadbuttonlogo: 'download.svg'})
}
  render() {
    return (
      <div style={this.props.show ? {display: 'block'} : {display: 'none'}}>
      {this.props.selectedBook && (
          <div className="modal-main">
            <button className="close">
              <img src='./cross-out.svg' alt="close" onClick={this.props.handleClose}></img>
            </button>
            <img src={this.props.selectedBook.logo} alt={this.props.selectedBook.name} className="modalimg"></img>
            <div className="text">
              <h1>{this.props.selectedBook.name}</h1>
              <p className="book-details">{this.props.selectedBook.discription}<a href={this.props.selectedBook.wikipedia}>Wikipedia</a></p>
              </div>
            <div className="row ab">
              <img className="col-3 likebutton" src={this.state.likebuttonlogo} alt="Like" onClick={(e) => this.changelikeStyle(e) }></img>
              <img className="col-3 sharebutton" src='./share.svg' alt="Like"></img>
              <img className="col-3 downloadbutton" src={this.state.downloadbuttonlogo} alt="Download" onClick={(e) => this.changedownloadStyle(e) }></img>
              <div className="lang">
                {"Book offered in:  "}
                <a href ="#">संस्कृत</a>
                <a href ="#">हिन्दी</a>
                <a href ="#">English</a>
              </div>
            </div>
          </div>
      )}
      </div>
    )
  }
}

export default Modal
