import React, { Component } from 'react'
import Bookbox from './Bookbox'
import './Navblock.css'
import Navblock from './Navblock'
export class Bodybox extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 navblock">
                      <Navblock />
                    </div>
                    <div className="col-9">
                        <Bookbox />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Bodybox
