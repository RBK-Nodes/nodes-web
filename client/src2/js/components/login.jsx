import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
  import './App.css';
class Login extends Component (){
    constructor(props){
        super(props)
        this.state = {
            'email': '',
            'password': '',
            validate:{
                eamilstate : '',
            },

        }
        this.handleChange = this.handleChange.bind(this)

    }
    //validateEmail()
    //handleChange()
    render(){
        return(
            <Container className = "login">
                <h3>log in</h3>
                <Form className = "form">
                    <Col>
                    <FormGroup>
                        <Label> user name</Label>
                        <Input
                        type = "username"
                        name = "username"
                        id = "username"
                        placeholder = "Enter your username"/>

                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>
                            <Label for = "examplepassword">password</Label>
                            <Input 
                            type = "password"
                            name = "password"
                            id = "examplePassword"
                            placeholder = "Enter your password"/>
                        </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}
export default Login