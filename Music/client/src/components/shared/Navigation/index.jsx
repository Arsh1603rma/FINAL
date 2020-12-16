import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  // This function allows us to use React Router
  // with React Bootstrap. Booooya
    return (
    <Nav.Link
      href={props.href}
      onClick={e => {
        e.preventDefault();
        props.navigate(props.href);    
      }}
    >
      {props.children}
    </Nav.Link>
  );
};

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>MOFO Gaming</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" component={NavLink}>Music</Link>
          <Link to="/new" component={NavLink}>New Music</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Navigation;