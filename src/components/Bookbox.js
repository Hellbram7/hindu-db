import React, { Component } from 'react'
import Logo1 from './ramayan.jpg'
import Logo2 from './mahabharat.jpg'
import Logo3 from './geeta.png'
import Logo4 from './srimad-bhagwat.jpg'
import './Bookbox.css'
import Modal from './Modal'
export class Bookbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    showModal = (event, book) => {
        this.setState({ show: true, selectedBook: book });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    render() {
        const books = [
            {
                id: '0',
                name: 'The Ramayana',
                logo: Logo1
                
            },
            {
                id: '1',
                name: 'The Shremad Bhagwat',
                logo: Logo4
            },
            {
                id: '2',
                name: 'The Geeta',
                logo: Logo3
            },
            {
                id: '3',
                name: 'The Mahabharat',
                logo: Logo2
            },
        ]
        return (
                 <div className="row book">
                    {
                        books.map((book) => {
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
                     <Modal show={this.state.show} selectedBook={this.state.selectedBook} handleClose={this.hideModal}/>
            </div>
            
        )
    }
}

export default Bookbox
