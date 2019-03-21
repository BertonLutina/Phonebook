import React, { Component } from 'react'
import { Jumbotron,InputGroup, FormControl, Image } from 'react-bootstrap';
import './styles.css';


class AddEntryPage extends Component {
  avatars = []
  render() {
    return (
      <div>
        <div className="Logo">
        <Image src={require('../assets/wemanityweb.png')} fluid/>
        </div>
        <div className="Container">
        <Jumbotron>
        <h1 style={{textAlign:'center'}}>Contact</h1>
          <p style={{textAlign:'center'}}>Create here your We-Contact!</p>
        <InputGroup className="mb-3">
  <FormControl placeholder="First name"/>
  <FormControl placeholder="Last name"/>
</InputGroup>
<FormControl placeholder="+32477 77 77 77"/>
        </Jumbotron>
        </div>
        
      </div>
    )
  }
}

export default AddEntryPage
