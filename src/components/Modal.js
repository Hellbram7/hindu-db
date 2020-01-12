import React, { Component } from 'react'
import './Modal.css'
import './Bookbox.css'
export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
        likebuttonlogo: './heart.svg',
        downloadbuttonlogo: './down-arrow.svg',
        x: 0
      
    }
}

changelikeStyle = (event) => {
  if (this.state.likebuttonlogo == './heart.svg') {
    this.setState({likebuttonlogo: './heart-red.svg', x: this.state.x + 1})
  }
  else {
    this.setState({likebuttonlogo: './heart.svg', x: this.state.x - 1})
  }
}

likeCalculator = () => {
    if (this.state.x>=1000 ) {
      this.state.x = this.state.x/1000 + 'k'
    }
    else {
      this.state.x = this.state.x
    }
    return this.state.x
}
changedownloadStyle = (event) => {
  this.setState({downloadbuttonlogo: 'download.svg'})
}
  render() {
    console.log(this.likeCalculator())
    return (
      <>
      {this.props.selectedBook && (
          <div style={this.props.show ? {display: 'block'} : {display: 'none'}} className="modal-main">
            <button className="close">
              <img src='./cross-out.svg' alt="close" onClick={this.props.handleClose}></img>
            </button>

            <div className="model-content">
              <img src={this.props.selectedBook.logo} alt={this.props.selectedBook.name} className="modalimg"></img>
              <div className="book-content">

                <div className="text">
                  <h1>{this.props.selectedBook.name}</h1>
                  <p className="book-details">{this.props.selectedBook.discription}<a href={this.props.selectedBook.wikipedia}>Wikipedia</a></p>
                  </div>
                <div className="row ab">
                 <img className="col-3 likebutton" src={this.state.likebuttonlogo} alt="Like" onClick={(e) => this.changelikeStyle(e) }></img>
                   <p>{this.state.x}</p>
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
            </div>
          </div>
      )}
      </>
    )
  }
}

export default Modal
