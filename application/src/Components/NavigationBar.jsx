import { Component } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "../Styles/Navbar.css"

export class NavigationBar extends Component {
    render() {
        return (
            <Navbar className='Navbar'  variant="" expand="lg">
                  <Container fluid>
                    <Navbar.Brand href="#home" className='Title'>Online Gas Booking System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-5 navitem">
                            <LinkContainer to={'/'} >
                                <Nav.Link className='navcontainer'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/register'}>
                                <Nav.Link className='navcontainer'>Register New Customer</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/newConnection'}>
                                <Nav.Link className='navcontainer'>NewConnection</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/login'}>
                                <Nav.Link className='navcontainer'>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/customerInfo'}>
                                <Nav.Link className='navcontainer'>CustomerInfo</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                        <Nav className='ml-auto  '>
                            <Nav.Link className='navcontainer'>
                                <Button variant='primary'>LogOut</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}