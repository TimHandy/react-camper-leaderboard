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

        const campers = this
            .props
            .campers
            .map((camper, idx) => {
                return (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{camper.user}</td>
                        <td>{camper.recent}</td>
                        <td>{camper.allTime}</td>
                    </tr>
                )
            })

        return (
            <tbody>
                {campers}
            </tbody>
        )
    }
}

module.exports = Row
