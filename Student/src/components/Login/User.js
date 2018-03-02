import React, { Component } from 'react';

class User extends Component {
  render () {
    return (
      <li>
        {this.props.Firstname} - {this.props.Lastname} - {this.props.email} - {this.props.tel} - {this.props.password} - {this.props.password_confirm}
      </li>
    );
  }
}

export default User;