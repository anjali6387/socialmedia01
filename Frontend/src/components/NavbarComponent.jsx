// // src/components/Navbar.js
// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//                 <span className="navbar-brand mb-0 h1">User Submission</span>
//                 <div>
//                     <button 
//                         className="btn btn-link"
//                         onClick={() => setView('form')}
//                     >
//                         Submit
//                     </button>
//                     <button 
//                         className="btn btn-link"
//                         onClick={() => setView('admin')}
//                     >
//                         Admin
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">User Submission</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Submit</Nav.Link>
            <Nav.Link as={Link} to="/admin/login">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

