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
        return (	
                  <tr >
                    <td>Jill</td>
                    <td>Smith</td> 
                    <td>50</td>
                    <td>50</td>
                  </tr>
        )
    }
}

module.exports = Row