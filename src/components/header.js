import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Example extends React.Component {
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
        <div>
            <Navbar color="primary" light expand="md">
            <Link to='/'><NavbarBrand href="">{this.props.nama}</NavbarBrand></Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                {/* <NavItem>
                    <Link to='' style={{textDecoration:'none'}}><NavLink href="">{this.props.jumlahHuruf} Kata</NavLink></Link>
                </NavItem> */}
                <NavItem>
                    <Link to='' style={{textDecoration:'none'}}><NavLink href="">{this.props.todo} Todo</NavLink></Link>
                </NavItem>
                <NavItem>
                    <Link to='/form' style={{textDecoration:'none'}}><NavLink href="">Login</NavLink></Link>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                    <Link to='/latihan2' style={{textDecoration:'none'}}>
                    <DropdownItem>
                        Latihan 2
                    </DropdownItem>
                    </Link>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {nama : state.user.username,
            email : state.user.email,
            buah : state.product.namaProduct,
            jumlahHuruf : state.kata.jumlahKata,
            todo : state.todo.todo
        }
}

export default connect(mapStateToProps)(Example)