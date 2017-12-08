import React from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Routas.css';

class Routas extends React.Component {

constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
}
toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
render() {
    return (
        <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
            <Navbar className="text-success" color="faded" light expand="md">
                <NavbarBrand href="/">  Inicio </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem >
                            <NavLink href="/Blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Galeria">Galeria</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Ubicacion">Ubicacion</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact/hervin/cardona">Contacto</NavLink>
                            <NavLink href="/contact/mozafar/haider"> Otro Contacto</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
};

export default Routas;