import React, { Component } from 'react'
import './Navblock.css'
export class Navblock extends Component {
    render() {
        
        return (
            <>
                {
                        this.props.items.map((items) => {
                            return (
                            <div key={items.id} className="row" title={items.name}>
                             <div className="container catagory">
                            <h4><b>{items.name}</b></h4>
                            <p>&nbsp;Original Sanskrit copy</p>
                            </div>
                            </div>
                            )
                        })
                    }
            </>
        )
    }
}

export default Navblock
