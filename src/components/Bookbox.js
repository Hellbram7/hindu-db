import React, { Component } from 'react'
import './Bookbox.css'
import Modal from './Modal'
export class Bookbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.cls = ''
    }
    showModal = (event, book) => {
        this.setState({ show: true, selectedBook: book });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

      changeClass = () => {
          if (this.state.show == true) {
              this.cls = "row book change"
          }
          else {
              this.cls = "row book"
          }
          return this.cls
      }
      
    render() {
       
        return (
            <>
                 <div className={this.changeClass()}>
                    {
                        this.props.books.map((book) => {
                            return (
                                <div key = {book.id} className="col-2 book-item" onClick={(e) => this.showModal(e, book)}>
                                    <img className="book" title={book.name} alt={book.name} src={book.logo}></img>
                                    <div className="container card-content">
                                        <p className="book-title">{book.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Modal show={this.state.show} selectedBook={this.state.selectedBook} handleClose={this.hideModal}/>
            </>
        )
    }
}

export default Bookbox
