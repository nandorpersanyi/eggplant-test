import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
//import UserTable from './UserTable';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

export default class App extends Component {

  state = {
    error: null,
    isLoaded: false,
    // Fake data loading
    users: [
      { name: "John", birth: '', email:'john@john.com', children:1 },
      { name: "Bill", birth: '', email:'bill@bill.com', children:3 },
      { name: "Sam", birth: '', email:'sam@sam.com', children:0 }
    ]/*,
    sortedBy: 'nameDesc'*/
  };

  componentDidMount() {
    /*fetch('http://localhost/eggplant/api')
      .then(result => result.json)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result.users
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )*/
  }

  uploadUser = (userInput) => {
    userInput.birth = userInput.birth.format()
    this.setState({
      users: this.state.users.concat(userInput)
    });
    /*fetch('http://localhost/eggplant/api/add', {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => 
      this.setState({
        isLoaded: false
      }))
    .catch(error => console.error('Error:', error));*/
  }

  render() {
    const columns = [
      {Header: 'Name', accessor: 'name'},
      {Header: 'Date of birth', accessor: 'birth'},
      {Header: 'Email address', accessor: 'email'},
      {Header: 'Number of children', accessor: 'children'}];
    return (
      <div className="App">
        <UserInput uploadUser={this.uploadUser}/>
        <ReactTable
          data={this.state.users}
          columns={columns}
        />
      </div>
    );
  }
}
