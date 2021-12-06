import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const response = await fetch(url);
        const posts = await response.json();
        this.setState({ posts });
    }

    
    render() {
        const { posts } = this.state;

        return (
            <>
                {posts && posts.length && posts.map(post => <div key={post.id}>{post.title}</div>)}
            </>
        )
    }
}

export default PostList
