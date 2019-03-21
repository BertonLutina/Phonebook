import React, { Component } from 'react'
import { Jumbotron,InputGroup, FormControl, Col, Button, Form, Image } from 'react-bootstrap';
import './styles.css';


class AddEntryPage extends Component {
  avatars = ["female_school_director_user_50.png",
  "female_school_director_user_50_2.png",
  "female_school_director_user_50_3.png",
  "female_user_50_2.png",
  "female_user_50_3.png",
  "female_user_50_5.png",
  "male_school_director_user_50.png",
  "male_school_director_user_50_3.png",
  "male_school_director_user_50_4.png",
  "male_user_50.png",
  "male_user_50_2.png", 
  "male_user_50_6.png"]
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
        
        <Form>
   
        <InputGroup className="mb-3">
        <Form.Group as={Col} controlId="fname">
          <FormControl placeholder="First name" type="text"/>
          </Form.Group>
          <Form.Group as={Col} controlId="lname">
          <FormControl placeholder="Last name" type="text"/>
          </Form.Group>
        </InputGroup>
        <Form.Group as={Col} controlId="phonenumber">
            <FormControl placeholder="+32477 77 77 77" type="text"/>
          </Form.Group>
          
    <Form.Group as={Col}>
    
   
      <h4 style={{textAlign:'center'}}>Choose your Avartar </h4>
  
    {
          this.avatars.map((ava,index) => {
          return <Image key={index} src={require("../Avatars/"+ava)} onClick={ () => alert(ava)}/>
          }
          )
        }
    </Form.Group>
    <Form.Group as={Col} controlId="phonenumber">
    <Button variant="info" type="submit">
    Submit
  </Button>
  </Form.Group>
        </Form>
          
        </Jumbotron>
        </div>
        
      </div>
    )
  }
}

export default AddEntryPage
