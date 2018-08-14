import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 20
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

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
    const { posts, loading, currentPage, postsPerPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const renderPosts = currentPosts.map((post, index) => {
      return <table key={index}>
      <tbody>
      <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
      </tr>
      </tbody>
      </table>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>
          {renderPosts}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}
export default App;