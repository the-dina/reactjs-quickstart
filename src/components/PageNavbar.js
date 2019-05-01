import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";
import UserMenu from './UserMenu';

class PageNavbar extends React.Component {
    state = { isOpen: false };

    toggle = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">React Quick Start</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/Help/">Help</NavLink>
                            </NavItem>
                            <UserMenu />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default PageNavbar;
