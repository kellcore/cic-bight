import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar color="dark" dark expand="sm" fixed="top">
                <NavbarBrand tag={Link} to='/'>
                    <span className="text-info"> bight </span>
                </NavbarBrand>
                <NavbarToggler onClick={() => setOpen(!open)} />
                <Collapse isOpen={open} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/inventory'>inventory</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/shipments'>shipments</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;