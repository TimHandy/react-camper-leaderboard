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
        const url = "https://freecodecamp.com/" + camper.user
        return (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td style={{textAlign: 'left'}}><img src={camper.img} /><a href={url} target="_blank">{camper.user}</a></td>
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
