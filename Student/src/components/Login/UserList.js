class UserList extends Component {
    render () {
      return (
          <ul>
            {this.props.users.map(u => {
              return (
                <User
                  key={u.id}
                  Firstname={u.Firstname}
                  Lastname={u.Lastname}
                  email={u.email}
                  tel={u.tel}
                  password={u.password}
                  password_confirm={u.password_confirm}
                />
              );
            })}
          </ul>
      );
    }
  }