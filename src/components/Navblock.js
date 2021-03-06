import React, { Component } from 'react'
import './Navblock.css'
export class Navblock extends Component {
    render() {
        const items = [
            {
                id: '0',
                name: 'Vedas'
                
            },
            {
                id: '1',
                name: 'Puranas'
            },
            {
                id: '2',
                name: 'Mahakavya'
            },
            {
                id: '3',
                name: 'Test Object'
            },
        ]
        return (
            <>
                {
                        items.map((items) => {
                            return (
                            <div key={items.id} className="row" title={items.name}>
                             <div className="container catagory">
                            <h4><b>{items.name}</b></h4>
                            <p>Original Sanskrit copy</p>
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
