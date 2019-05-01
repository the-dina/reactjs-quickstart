import React from 'react';
import {observer} from 'mobx-react';
import authService from '../services/AuthService';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";

const UserMenu = () => {
    if (!authService.authInfo)
        return ( <NavItem>
                <NavLink onClick={authService.login} className='clickable'>
                    Login
                </NavLink>
            </NavItem>);

    return (<UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {authService.authInfo.givenName}
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem onClick={authService.logout} className='clickable'>
                logout
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>)
};

export default observer(UserMenu);



