import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    const renderPost = this.props.posts
      .filter(post => post.id == this.props.match.params.number)
      .map(post => (
        <div key={post.id}>
          <h1>Post title: </h1>
          {post.title}
          <p>
            Post id:
            {post.id}
          </p>
          <b>Post body:</b>
          {post.body}
        </div>
      ));

    return (
      <div>
        {renderPost}
        <Link to="/posts">{"go back"}</Link>
        {console.log(this.props.match.params.number)}
      </div>
    );
  }
}
export default Post;

/*
const Post = props => {
  const renderPost = this.props.posts.map((post, index) => (
    <p key={post.id}>
      {post.id}. {post.title}
    </p>
  ));
  if (props.match.params.number === this.post.id) {
    return (
      <div>
        {renderPost}
        <Link to="/posts">{"go back"}</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Post doesn't exist</h2>
        <Link to="/posts">{"go back"}</Link>
      </div>
    );
  }
};
export default Post;


export default Player
*/
