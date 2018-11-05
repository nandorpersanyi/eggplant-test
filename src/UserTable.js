import React, { Component } from 'react'

export default class UserTable extends Component {

  render() {
    return (
      <div>
        <table>
          <tr onClick={this.props.sortUser}>
            <th id='name'>Name</th>
            <th id='birth' >Date of birth</th>
            <th id='email' >Email</th>
            <th id='children' >Number of children</th>
          </tr>
          {
            this.props.users.map((elem) => {
              return (
                <tr>
                  <td>{elem.name}</td>
                  <td>{elem.birth}</td>
                  <td>{elem.email}</td>
                  <td>{elem.children}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}
