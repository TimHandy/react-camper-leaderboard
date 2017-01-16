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
        super(props)
    }
    
    componentDidMount() {
    console.log('inside Table')
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
          .then(function(response){
            console.log(response.data[0]); 
            console.log('1')
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
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                    </tr>
                </thead>
                  <tbody>
                     <Row />
                  </tbody>
                </table>
                
            </div>
        )
    }
}




module.exports = Table
