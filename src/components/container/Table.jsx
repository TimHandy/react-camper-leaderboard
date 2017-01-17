/*
This file renders an input text box and updates the state on the parent component defined in app.jsx on every keypress
*/
'use strict'

import React from 'react'
import Row from 'Row'
import axios from 'axios'
//import httpReq from '../../utils/APIManager'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: [],
      column: 'recent'
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  apiCall = () => { axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/' + this.state.column)
        .then(response => {
          this.setState({
            campers: []
          })
          response.data.forEach(user => {
              const camper = {
                user: user.username,
                recent: user.recent,
                allTime: user.alltime
              };
              this.setState({
                campers: this.state.campers.concat(camper)
              })
            })
        })
        console.log('campers updated')
  }

  componentDidMount() {
    this.apiCall()
  }

  handleClick = () => {
   // console.log('column clicked')
    const colVal = this.state.column === 'recent' ? 'alltime': 'recent'
    this.setState({
      column: colVal
    }, function() {
      this.apiCall()
    })
    
    console.log(this.state.column);

    //console.log(this);
    // const arrow = this.state.column
    //   ? " triangle"
    //   : ''
    // this.setState({arrowSymbol: arrow})
  }

  render() {
    // console.log(this.state.campers); const allTime = "All Time points"


    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th onClick={this.handleClick}><u>Points in past 30 days</u> {this.state.column === 'recent' ? '\u25BC' : ''}</th>
              <th onClick={this.handleClick}><u>All Time points</u> {this.state.column === 'alltime' ? '\u25BC' : ''}</th>
            </tr>
          </thead>

          <Row campers={this.state.campers}/>

        </table>

      </div>
    )
  }
}

module.exports = Table