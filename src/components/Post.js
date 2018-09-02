import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  render() {
    const renderPost = this.props.posts
      .filter(post => post.id == this.props.match.params.number)
      .map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>
            Post id:
            {post.id}
          </p>
          <b>Post:</b>
          {post.body}
        </div>
      ));
    const renderComments = this.props.comments
      .filter(comment => comment.postId == this.props.match.params.number)
      .map(comment => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>
            Mail:
            {comment.email}
          </p>
          {comment.body}
          <hr />
        </div>
      ));
    return (
      <div>
        {renderPost}
        <hr />
        {renderComments}
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
