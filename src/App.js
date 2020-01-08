import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
    }
  }

  handleChange = event => {
    this.setState({ name : event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const user ={
      name : this.state.name
    };
    axios.post('https://jsonplaceholder.typicode.com/users', { user })
  .then(response=> {
    console.log(response)
    console.log(response.data);
    })
  }
  


componentDidMount(){
  
  }

  render(){
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>
            Person Name :
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <button type="submit"> Add </button>
        </form>
      </div>
    )
  }
}


