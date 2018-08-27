import React, { Component } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

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
        <div>
          <p>
            <ul key={this.props.posts.id}>
              <li>
                <Link to={`/posts/${post.id}`}>
                  Post:
                  {post.id}
                </Link>
              </li>
            </ul>
            {post.title}
          </p>
        </div>
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
        <div />
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default Posts;
