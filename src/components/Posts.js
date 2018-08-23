import React, { Component } from "react";

class Posts extends Component {
  render() {
    const indexOfLastPost = this.props.currentPage * this.props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.postsPerPage;
    const currentPosts = this.props.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    const renderPosts = currentPosts.map((post, index) => {
      return this.props.loading ? (
        "...loading"
      ) : (
        <table key={index}>
          <tbody>
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          </tbody>
        </table>
      );
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.posts.length / this.props.postsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.props.handleClick.bind(this)}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>{renderPosts}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default Posts;

/*render() {
    return <p>Ovo su brojevi dobitne kombinacije {this.props.posts}.</p>;
  }
}

export default Posts;*/
