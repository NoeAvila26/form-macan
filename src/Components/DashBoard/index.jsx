import React, { Component } from "react";
import {Container, Row,Col, CardBody,Card, ListGroup, ListGroupItem, Button
} from "reactstrap";

//importamos firebase

import firebase from "../../Services/firebase";

class Dashoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCollection: [],
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const userRef = firebase.database().ref("/users");
    userRef.on("value", (snapshot) => {
      let usersData = snapshot.val();
      const arrayUsers = []
        for (const key in usersData) {
          arrayUsers.push({
            key,
            name: usersData[key].name,
            mail: usersData[key].mail,
            phone:usersData[key].phone
          })
        }
      this.setState({ usersCollection: arrayUsers });
    });
  }

  onClickHandler(event) {
    const key = event.target.dataset.key
    console.log(event.target.dataset.key)
    var usersData=firebase.database().ref("/users");                  
    usersData.child(key).remove()
  }


  

  render() {
    return (
      <Row> 
        {Object.keys(this.state.usersCollection).map((user) => {
          return (
            <Col  className='d-flex justify-content-between p-2' >
              <Card>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem color="dark" >
                      Nombre: {this.state.usersCollection[user].name}
                    </ListGroupItem>
                    <ListGroupItem color="dark">
                        Correo: {this.state.usersCollection[user].mail}
                      </ListGroupItem>
                      <ListGroupItem color="dark">
                        Telefono: {this.state.usersCollection[user].phone}
                      </ListGroupItem>
                  </ListGroup>
                </CardBody>
                <Button className="btn btn-danger" data-key = {this.state.usersCollection[user].key} onClick = {this.onClickHandler}>
                  Borrar
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Dashoard;
