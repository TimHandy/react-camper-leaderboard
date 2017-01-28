'use strict'

import React from 'react'
import Row from 'Row'
import axios from 'axios'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: [],
      column: 'recent'
    }
  }

  apiCall = () => {
    
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/' + this.state.column).then(response => {

      const campers = response.data.map(function(user) {
        return {
          user: user.username,
          recent: user.recent,
          allTime: user.alltime,
          img: user.img
        }
      })

      this.setState({campers: campers})
    })
    console.log('campers updated')
  }

  componentDidMount() {
    this.apiCall()
  }

  handleClick = (column) => {
    
    this.setState({
      column: column
    }, function() {
      this.apiCall()
    })
  }
  


  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th onClick={() => this.handleClick("recent")}>
                <u>Points in past 30 days</u>
                {this.state.column === 'recent'
                  ? '\u25BC'
                  : ''}</th>
              <th onClick={() => this.handleClick("alltime")}>
                <u>All Time points</u>
                {this.state.column === 'alltime'
                  ? '\u25BC'
                  : ''}</th>
            </tr>
          </thead>
          <Row campers={this.state.campers}/>
        </table>
      </div>
    )
  }
}

module.exports = Table
