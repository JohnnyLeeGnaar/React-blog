import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
   super(props);
   this.state = {
     data: null,
   };
   }
  
   componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(data => this.setState({ data }))

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
