class Form extends Component {
    constructor() {
      super();
      this.state = {
        users: [
          {id: 1, name: "Hervin", email: "hervin@hotmail.com"},
          {id: 2, name: "Efrain", email: "test@test.es"}
        ]
      };
    }
  
    handleOnAddUser (event) {
      event.preventDefault();
      let user = {
        name: event.target.name.value,
        email: event.target.email.value
      };
      this.setState({
        users: this.state.users.concat([user])
      });
    }
  
    render() {
      return (
          <div>
            <UserList users={this.state.users}  />
            <Login onAddUser={this.handleOnAddUser.bind(this)} />
          </div>
      );
    }
  }