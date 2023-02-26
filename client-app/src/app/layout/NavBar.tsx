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
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createTable' positive content='Create Table' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}