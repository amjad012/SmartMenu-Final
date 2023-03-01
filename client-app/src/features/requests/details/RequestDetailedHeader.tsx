import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {Request} from "../../../app/models/request";

const tableImageStyle = {
    filter: 'brightness(30%)'
};

const tableImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    request:Request
}

export default observer (function RequestDetailedHeader({request}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Segment style={tableImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={request.name}
                                    style={{color: 'white'}}
                                />                                                       
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Join Table</Button>
                <Button>Cancel attendance</Button>
                <Button as={Link} to={`/manage/${request.id}`} color='orange' floated='right'>
                    Manage Request
                </Button>
            </Segment>
        </Segment.Group>
    )
})
