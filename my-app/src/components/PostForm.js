import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const response = await fetch(url, settings);
        const data = await response.json();
        console.log(data);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        const { userId, title, body } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Id</label>
                    <input type="text" value={userId} name="userId" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} name="title" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" value={body} name="body" onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
