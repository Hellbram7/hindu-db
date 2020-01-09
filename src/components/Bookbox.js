import React, { Component } from 'react'
import Logo1 from './ramayan.jpg'
import Logo2 from './mahabharat.jpg'
import Logo3 from './geeta.png'
import Logo4 from './srimad-bhagwat.jpg'
import './Bookbox.css'
import Dashboard from './Dashboard'
export class Bookbox extends Component {
    numlist = ['1','2','3','4']
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
            <div className="container">
                <div className="row">
                    {
                        books.map((book) => {
                            return (
                            <div className="col-2"><img className="book" title={book.name} alt={book.name} src={book.logo}></img>
                             <div class="container card-content">
                            <h4><b>{book.name}</b></h4>
                            <p>Original Sanskrit copy</p>
                            </div>
                            </div>
                            )
                        })
                    }
                </div>
                <Dashboard />
            </div>
            
        )
    }
}

export default Bookbox
