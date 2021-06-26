import React from 'react'
import {Nav, Navbar, Button, Form, FormControl} from "react-bootstrap"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Link to="/"> Home </Link>
            <Link to="/products">Products</Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavBar
