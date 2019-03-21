import React, { Component } from 'react';
import './styles.css';
import {Form, Image, Jumbotron, Table, Button} from 'react-bootstrap';

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
        <Table striped bordered hover >
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last Name</th>
          <th>Phone number</th>
          <th>Country</th>
          <th>Flag</th>
        </tr>
        <tbody>
          <td>483458</td>
          <td>Berton</td>
          <td>Lutina Mulamba</td>
          <td>0471634353</td>
          <td>Belgium</td>
          <td>B</td>
        </tbody>
        </Table>
        </div>
        
       
        
        
        
      </div>
    )
  }
}


export default HomePage
