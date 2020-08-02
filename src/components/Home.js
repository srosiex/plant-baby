import React, { Component } from 'react'
import Plant from './Plant'

export class Home extends Component {
    state = {
        plants: {}
    }
    componentDidMount(){
        fetch('http://localhost:3001/plants')
        .then(res => res.json())
        .then(data => this.setState({
            plants: data
        }))
    }
    render(){
        console.log(this.state.plants)
        return (
            <div>
                Home
            </div>
        )}
    }


export default Home
