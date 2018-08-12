import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
   super(props);
   this.state = {
     posts: [],
   };
   }
   
   componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => { let posts = data.response.map((post) => {return(
    <div key={post.id}> </div>

  )
  })
  this.setState({posts:posts});
  console.log("state", this.state.posts);
  })
}

  
  render() {
    return (
      <div>
        {console.table(this.state.data)}  
      </div>
    );
  }
  
}
export default App;
