import React, { Component } from 'react'
import Plant from './Plant'

export class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        fetch('https://localhost:3001/api/plants')
        .then(r => console.log(r.json()))
    }
    render(){
        return (
            <div>
                Home
            </div>
        )}
    }


export default Home
