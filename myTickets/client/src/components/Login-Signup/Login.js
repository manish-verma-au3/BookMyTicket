import React, { useState, useEffect } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

function Login(props) {

    const history = useHistory();
    const {register, handleSubmit} = useForm(); 
    const [response, setResponse] = useState('');


    const onSubmit = (data) => {
        console.log(data);
            axios.post("http://localhost:5000/userSignup/login", data)
            .then(res => {
                console.log(res);
               setResponse(res.data);
    
               localStorage.setItem("user", JSON.stringify(res.data));
               history.push("/home");
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <h1>Login Here!</h1>
                    <Form  onSubmit={handleSubmit(onSubmit)}>  
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" ref={register}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" ref={register}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Login
                </Button>
               
              </Form>

                  </Col>
                </Row>  
            </Container>
            
            
        </div>
    )
}

export default Login;
