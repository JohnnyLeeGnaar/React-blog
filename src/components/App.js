import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./Posts";
import Post from "./Post";
import Comments from "./Comments";
import Users from "./Users";
import Home from "./Home";
import Error from "./Error";
import Navigation from "./Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: [],
      comments: [],
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

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      })
      .finally(() => this.setState({ loading: false }));
  }
  fetchUsers() {
    this.setState({ loading: true });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users });
      })
      .finally(() => this.setState({ loading: false }));
  }
  fetchComments() {
    this.setState({ loading: true });

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(comments => {
        this.setState({ comments: comments });
      })
      .finally(() => this.setState({ loading: false }));
  }
  componentDidMount() {
    this.fetchPosts();
    this.fetchComments();
    this.fetchUsers();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/posts"
                render={() => (
                  <Posts
                    posts={this.state.posts}
                    loading={this.state.loading}
                    currentPage={this.state.currentPage}
                    postsPerPage={this.state.postsPerPage}
                    handleClick={this.handleClick}
                  />
                )}
              />
              <Route
                path="/posts/:number"
                render={props => (
                  <Post
                    {...props}
                    id={this.props.id}
                    posts={this.state.posts}
                  />
                )}
              />
              <Route
                path="/comments"
                render={() => (
                  <Comments
                    comments={this.state.comments}
                    loading={this.state.loading}
                    currentPage={this.state.currentPage}
                    postsPerPage={this.state.postsPerPage}
                    handleClick={this.handleClick}
                  />
                )}
              />
              <Route
                path="/users"
                render={() => (
                  <Users
                    users={this.state.users}
                    loading={this.state.loading}
                    currentPage={this.state.currentPage}
                    postsPerPage={this.state.postsPerPage}
                    handleClick={this.handleClick}
                  />
                )}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
