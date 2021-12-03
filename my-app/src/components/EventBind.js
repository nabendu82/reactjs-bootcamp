import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello World'
        }
        //this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({
            message: 'Hello React'
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
                {/* <button onClick={this.handleClick}>Click</button> */}
                {/* <button onClick={() => this.handleClick()}>Click</button> */}
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default EventBind
