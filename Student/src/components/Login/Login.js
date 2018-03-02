import React, { Component } from 'react'

export default class Login extends Component {
    render(){
        return (
              <form onSubmit={this.props.onAddUser}>
                  <input type="text" placeholder="Primer Nombre" name="Firstname" />
                  <br/>
                  <input type="text" placeholder=" Primer Apellido" name="Lastname" />
                  <br/>
                  <input type="email" placeholder="Email" name="email" />
                  <br/>
                  <input type="tel" placeholder="Tel" name="tel"/>
                  <br/>
                  <input type="password" placeholder="password" name="password"/>
                  <br/>
                  <input type="password" placeholder="password_confirm" name="password_confirm"/>
                  <br/>
                  <input type="submit" value="Guardar" />
                 <input type="submit" value="limpiar"/>
                  <br/>
              </form>
    );
 }
}