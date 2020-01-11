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
                        <input type="text" placeholder="Search..." className="container inbox"></input>
                    <Navblock />
                    </div>
                </div>
                <div className="col-9">
                    <Bookbox />
                </div>
            </div>
        )
    }
}

export default Bodybox
