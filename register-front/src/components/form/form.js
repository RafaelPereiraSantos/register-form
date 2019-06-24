import React from 'react';
import Field from '../form_field/field';
import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.submit = this.submit.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
    this.updateEmailState = this.updateEmailState.bind(this);
    this.updateNamePassword = this.updateNamePassword.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.registerPerson()
  }

  updateNameState(newName) {
    this.setState({
      name: newName
    });
  }

  updateEmailState(newEmail) {
    this.setState({
      email: newEmail
    });
  }

  updateNamePassword(newPassword) {
    this.setState({
      password: newPassword
    });
  }

  registerPerson() {
    let data = { 'name': 'rafael', 'email': 'teste@teste.com', 'password': '123' };
    let payload = JSON.stringify(data);
    fetch('http://localhost:3000/register',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: payload
        }
      )
      .then(response => response.json())
      .then((json) => { alert(json) });
    }

  render() {
    return(
      <form>
        <Field name='name' onValueChange={this.updateNameState}/>
        <Field name='email' onValueChange={this.updateEmailState}/>
        <Field name='password' onValueChange={this.updateNamePassword}/>
        <input type='button' value='enviar' class='submit-input' onClick={this.submit}/>
      </form>
    );
  }
}