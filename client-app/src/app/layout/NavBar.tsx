import {Button, Container, Menu} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
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
                </Menu.Item>
            </Container>
        </Menu>
    )
}