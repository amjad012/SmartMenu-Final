import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Table } from '../../../app/models/table';
import React from 'react';
interface Props {
    table : Table
}
export default function TableListItem({table}:Props) {

    return (
       <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' circular src='/assets/user.png'/>
                    <Item.Content>
                        <Item.Header as={Link} to={`/tables/${table.id}`}>
                            {table.number}
                            </Item.Header>
                            <Item.Description>Table Opened By</Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock'/>{table.date}
                <Icon name='marker'/>
            </span>
        </Segment>
        <Segment secondary>
             Table Sharing go here
        </Segment>
        <Segment clearing>
            <span>description here</span>
            <Button 
                as={Link} to={`/tables/${table.id}`}
                color='teal'
                floated='right'
                content='View'
                />
        </Segment>
       </Segment.Group>
    )
}