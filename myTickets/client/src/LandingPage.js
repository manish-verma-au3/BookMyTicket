import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import SignUp from '../src/components/SignUp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';

function LandingPage() {

    const [visible, setVisible] = useState(false);
    const [signupVisible, setSignupVisible] = useState(true);

     const onButtonClicked = () => {
        setVisible(true);
        setSignupVisible(false);
       
    }

    return (
        <div>
            
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BookMyTicket</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
        </Navbar>
        <br/>

        {
                   signupVisible ? <SignUp/>  : <Login/>

                }
               
        <br></br>
        <Container>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col>
            
                {
                    signupVisible ? <Button variant="primary" type="submit" onClick={onButtonClicked}>
                    Login Here!
                </Button> : null
                }
                
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default LandingPage
