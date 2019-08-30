import React from "react"
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Nav, Navbar} from 'react-bootstrap';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2.5rem` }}>
    <Link className="navbar-brand" class="text-white" to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {

  return (
    <div class="container-fluid text-dark preload" style={{backgroundColor: 'white'}}>
        <Row >
            <Col className="p-0">
                <Navbar  collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Mega Corp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <ListLink to="/">Home</ListLink>
                            <ListLink to="/about/">About</ListLink>
                            <ListLink to="/services/">Services</ListLink>
                            <ListLink to="/careers/">Careers</ListLink>
                            <ListLink to="/contact/">Contact</ListLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>

        {children}

        <Row>
            <Col className="">
                <section id="footer" style={{ paddingTop: `2em`, paddingBottom: `2em`}}>
                    <div class="row text-center text-xs-center text-sm-center text-md-center text-black"  style={{background: "none"}}>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <h5>Big logo</h5>
                            <p class="text-center">
                                Standard location info and contact info
                            </p>
                        </div>
                    </div>

                    <Row>
                        <Col style={{textAlign: 'center'}}>
                            <p class="h6">Mega Corp <span>&copy;</span> 2018 All right Reversed.</p>
                        </Col>
                    </Row>	
                </section>
            </Col>
        </Row>

    </div>
  )
}
