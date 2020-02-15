import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {useForm} from 'react-hook-form';
import axios from 'axios';


function SignUp() {

    const {register, handleSubmit} = useForm(); 
    const [response, setResponse] = useState('');
  

    
    const onSubmit = (data) => {
        console.log(data);
            axios.post("http://localhost:5000/userSignup/add", data)
            .then(res => {
                console.log(res)
                setResponse(res.data);
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
                     <h2>SignUp!</h2>
                     <hr/>  
                   <Form  onSubmit={handleSubmit(onSubmit)}>  
                 <Form.Group controlId="formBasicName">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control name='username' placeholder="Enter username" ref={register} />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" name='number' placeholder="Enter your number" ref={register} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" ref={register}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" ref={register}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Register 
                </Button>
               
              </Form>


                 </Col>
                </Row>  
            </Container> 
            

        </div>
    )
}

export default SignUp 
