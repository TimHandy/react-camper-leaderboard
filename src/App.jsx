'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.scss'
import Table from 'Table'



//const Table = require('./components/container/Table.jsx')
class App extends React.Component {
    constructor(props) {
        super()
    }

    render() {	
        return (	
            <div style={{width:"50%", margin:"0 auto"}}>
                <Table />
            </div>
        )
    }
}

console.log('hello')

ReactDOM.render(
	<App />, document.getElementById('app')
)