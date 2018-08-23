import React, { Component } from "react";

class Comments extends Component {
  render() {
    const indexOfLastPost = this.props.currentPage * this.props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.postsPerPage;
    const currentPosts = this.props.comments.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    const renderPosts = currentPosts.map((comment, index) => {
      return this.props.loading ? (
        "...loading"
      ) : (
        <table key={index}>
          <tbody>
            <tr>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          </tbody>
        </table>
      );
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.comments.length / this.props.postsPerPage);
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

export default Comments;
