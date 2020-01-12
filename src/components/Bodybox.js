import React, { Component } from 'react'
import Bookbox from './Bookbox'
import './Navblock.css'
import Navblock from './Navblock'
export class Bodybox extends Component {
    constructor(props) {
       super(props)
       this.state = {
           initialItems: this.props.books
       }
    }
    updatedList = (event) => {
        this.setState({initialItems: this.state.initialItems.filter(function(item){
            console.log(item);
            return item.toLowerCase().search(
              event.target.value.toLowerCase()) !== -1;
          })})
    }
    componentWillMount(){
        this.setState({items: this.state.initialItems})
      }
    render() {
        return (
            <div className="container">
                <div className="col-3 navblock">
                    <div>
                    <input type="text" placeholder="Search..." className="container inbox" onChange={(e) => this.updatedList(e)}></input>
                    <Navblock />
                    </div>
                </div>
                <div className="col-9">
                    <Bookbox books={this.state.items}/>
                </div> 
            </div>
        )
    }
}

export default Bodybox
