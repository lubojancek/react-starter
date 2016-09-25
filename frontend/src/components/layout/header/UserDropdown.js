import React, { Component, PropTypes } from 'react';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';

export default class UserDropdown extends Component {
    static propTypes = {
        onLogoutClicked: PropTypes.func.isRequired,
        userName: PropTypes.string.isRequired,
    };

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.onLogoutClicked();
    }

    render() {
        const { userName } = this.props;

        const title = (<span>Hi {userName}</span>);

        return (
            <Nav pullRight>
                <NavDropdown title={title} id="user-dropdown">
                    <MenuItem onClick={this.onLogoutClick}>Log Out</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }
}