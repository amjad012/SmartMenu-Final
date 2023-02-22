import { Link } from "react-router-dom";
import { Container, Header, Segment,Image, Button, ItemDescription, Item } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom:12}} />
                    SmartMenu   
                </Header>
                <Header as='h2' inverted content='Welcome to SmartMenu'/>
                <Item.Description as='h3'content='Browse the menu and order directly from application'/>
                <Button as={Link} to='/tables' size='huge' positive> Take me to the SmartMenu</Button>
            </Container>
        </Segment>
    )
}