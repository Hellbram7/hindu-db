import React, { Component } from 'react'
import Bookbox from './Bookbox'
import './Navblock.css'
import Navblock from './Navblock'
export class Bodybox extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-3 navblock">
                    <div className="boxposition">
                    <Navblock />
                    </div>
                </div>
                <div className="col-9">
                    <Bookbox books={this.props.books}/>
                </div> 
            </div>
        )
    }
}

export default Bodybox
