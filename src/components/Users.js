import React, { Component } from "react";

class Users extends Component {
  render() {
    const indexOfLastPost = this.props.currentPage * this.props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.props.postsPerPage;
    const currentPosts = this.props.users.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    const renderPosts = currentPosts.map((user, index) => {
      return this.props.loading ? (
        "...loading"
      ) : (
        <table key={index}>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          </tbody>
        </table>
      );
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.users.length / this.props.postsPerPage);
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

export default Users;
