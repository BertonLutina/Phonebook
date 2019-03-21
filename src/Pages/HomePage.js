import React, { Component } from 'react';

import {Form, Image, Jumbotron, Button, ListGroup} from 'react-bootstrap';
import Mediaobject from './mediaobject';

class HomePage extends Component {
  render() {
    return (
      <div>
         <div className="Logo">
        <Image src={require('../assets/wemanityweb.png')} fluid/>
        </div>
        <Jumbotron>
          <h1 style={{textAlign:'center'}}>Webook!</h1>
          <p style={{textAlign:'center'}}>Search your contacts in your Webook</p>
        <Form.Control size="lg" type="text" placeholder="Search..." />
        </Jumbotron>
        <div className="add">
          <Button variant='link'>+ add new contact</Button>
        </div>
        <div className="TableStyle">
        <ListGroup variant="flush">
  <ListGroup.Item>
    <Mediaobject name="berton" 
                 phonenumber="0471634353" 
                 avatar={require('../Avatars/male_user_50.png')}/>
    </ListGroup.Item>
  
</ListGroup>
        </div>
      </div>
    )
  }
}


export default HomePage
