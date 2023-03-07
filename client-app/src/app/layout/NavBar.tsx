import {Button, Container, Menu,Image, Dropdown} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer (function NavBar() {
    const {userStore : {user, logout}} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: 10}}/>
                    SmartMenu
                </Menu.Item>
                <Menu.Item as={NavLink} to='/tables' name='Tables' />
                <Menu.Item as={NavLink} to='/requests' name='Requests' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button style={{marginRight:'5px'}} as={NavLink} to='/createTable' positive content='Create Table' />
                    <Button as={NavLink} to='/createRequest' positive content='Create Request' /> 
                </Menu.Item>'
            <Menu.Item position='right'>
                <Image src={user?.image || '/assets/user.png'} avatar spaced='right'/>
                <Dropdown pointing='top left' text={user?.displayName}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile'/>
                        <Dropdown.Item onClick={logout} text='Logout'icon='power'/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            </Container>
        </Menu>
    )
})