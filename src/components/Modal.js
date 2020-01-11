import React, { Component } from 'react'
import Logo1 from './ramayan.jpg'
import Logo2 from './mahabharat.jpg'
import Logo3 from './geeta.png'
import Logo4 from './srimad-bhagwat.jpg'
import './Modal.css'
import './Bookbox.css'
export class Modal extends Component {
  render() {
    console.log(this.props.selectedBook)
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
              <p className="book-details">The epic, traditionally ascribed to the Maharshi Valmiki, narrates the life of Ram, the legendary prince of the Koshal Kingdom. It follows his fourteen-year exile to the forest by his father King Dasharatha, on request of his step-mother Kaikeyi. His travels across forests in India with his wife Seeta and brother Lakshman, the kidnapping of his wife by Ravana, the great king of Lanka, resulting in a war with him, and Ram's eventual return to Ayodhya to be crowned king is the crux of the epic.......<a href={'https://en.wikipedia.org/wiki/Ramayana'}>Wikipedia</a></p>
              </div>
            <div className="row ab">
              <img className="col-3 likebutton" src='./heart.svg' alt="Like"></img>
              <img className="col-3 sharebutton" src='./share.svg' alt="Like"></img>
              <img className="col-3 downloadbutton" src='./down-arrow.svg' alt="Like"></img>
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
