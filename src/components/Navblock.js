import React, { Component } from "react"
import Bookbox from "./Bookbox"
import "./Navblock.css"

export class Navblock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: this.props.books
    }
  }

  updatedList = event => {
    this.setState({
      bookitems: this.state.initialItems.filter(function(item) {
        return (
          item.name.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
        )
      })
    })
  }

  filterList = (cat) => {
    this.setState({
        bookitems: this.state.initialItems.filter(function(item) {
          return (
            item.catagory === cat
          )
        })
    })
  }

  UNSAFE_componentWillMount() {
    this.setState({ bookitems: this.state.initialItems })
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="col-3 navblock">
            <div className="boxposition">
              <input
                type="text"
                placeholder="Search..."
                className="container inbox"
                onChange={e => this.updatedList(e)}
              ></input>
              {this.props.items.map(item => {
                return (
                  <div key={item.id} className="row" onClick={() => this.filterList(item.catagory)} title={item.name}>
                    <div className="container catagory">
                      <h4>
                        <b>{item.name}</b>
                      </h4>
                      <p>&nbsp;Original Sanskrit copy</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-9">
            <Bookbox bookitems={this.state.bookitems} />
          </div>
        </div>
      </>
    )
  }
}

export default Navblock
