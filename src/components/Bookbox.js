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
    showModal = (event) => {
        this.setState({ show: true });
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
                            <div key = {book.id} className="col-2" onClick={this.showModal}><img className="book" title={book.name} alt={book.name} src={book.logo}></img>
                             <div className="container card-content">
                            <h4><b>{book.name}</b></h4>
                            <p>Original Sanskrit copy</p>
                            </div>
                            </div>
                            )
                        })
                    }
                     <Modal show={this.state.show} handleClose={this.hideModal}/>
            </div>
            
        )
    }
}

export default Bookbox
