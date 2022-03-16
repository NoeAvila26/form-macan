import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//importamos firebase

import firebase from '../../Services/firebase'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      phone:""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({ [property]: value });
  }

  onSubmitHandler() {
    const { name, mail, phone } = this.state;
    let userObject = { name, mail, phone };
    // console.log(userObject);
    const userRef = firebase.database().ref('/users')
    userRef.push(userObject)
    this.setState({name:"", mail:"", phone:""})
  }

  componentDidMount() {
    const userRef = firebase.database().ref('/users')
    userRef.on('value', snapshot => {
      console.log('snapshot', snapshot.val() )
    })
  }

  render() {
    return (
      <row>
        <Form className="border border-secondary rounded p-3 mt-5 ">
          <FormGroup>
            <label className='' >Nombre</label>
            <input className = 'w-100' name="name" value={this.state.name} onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <label>Correo</label>
            <input  className = 'w-100' name="mail" value={this.state.mail} onChange={this.onChangeHandler}></input>
          </FormGroup>
          <FormGroup>
            <label>Telefono</label>
            <input  className = 'w-100' name="phone" value={this.state.phone} onChange={this.onChangeHandler}></input>
          </FormGroup>
          <Button className="btn btn-success" onClick={this.onSubmitHandler}>
            Guardar
          </Button>
        </Form>
      </row>
    );
  }
}

export default UserForm;
