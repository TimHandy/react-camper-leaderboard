/*
This file renders an input text box and updates the state on the parent component defined in app.jsx on every keypress
*/

'use strict'

import React from 'react'

class Row extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      
        const camper = this.props.campers.map((val, idx) => {
            return (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{val.user}</td>
                <td>{val.recent}</td>
                <td>{val.allTime}</td>
            </tr>
          )
        });

        console.log(camper)
        return (
            <tbody>
                {camper}
            </tbody>
        )
    }
}

module.exports = Row
