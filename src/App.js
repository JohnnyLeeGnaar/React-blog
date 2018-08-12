import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    loading: false
  };

  fetchPosts() {
    this.setState({ loading: true });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      })
      .finally(() => this.setState({ loading: false }));
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { posts, loading } = this.state;

    return loading
      ? 'Loading ...'
      : posts.map((post, index) => (
          <p key={post.id}>
            {post.id}. {post.title}
          </p>
        ));
  }
}
export default App;
