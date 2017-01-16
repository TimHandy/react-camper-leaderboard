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
        campers: []
      }
      //this.addItem = this.addItem.bind(this);
  	}

    componentDidMount() {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
          .then(response => {
            response.data.forEach(user => {
              const camper = {user: user.username, recent: user.recent, allTime: user.alltime};
              this.setState({
                campers: this.state.campers.concat(camper)
              })
            })
          })
    }

    render() {
      // console.log(this.state.campers);

        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                    </tr>
                </thead>

                     <Row campers={this.state.campers}/>

                </table>

            </div>
        )
    }
}




module.exports = Table
