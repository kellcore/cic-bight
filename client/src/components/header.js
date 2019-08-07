import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar color="dark" dark expand="sm" fixed="top">
                <NavbarBrand href="/">
                    <span className="text-info"> bight </span>
                </NavbarBrand>
                <NavbarToggler onClick={() => setOpen(!open)} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">inventory</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">shipments</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;