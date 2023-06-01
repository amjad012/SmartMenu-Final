import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label, Segment } from 'semantic-ui-react';
import { Table } from '../../../app/models/table';
import React from 'react';
import { format } from "date-fns";
import { Demand } from '../../../app/models/demand';

interface Props {
    demand : Demand
}
export default function DemandListItem({demand}:Props) {
//this file for display the table image and details from the home screen
    return (
       <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as={Link} to={`/demands/${demand.id}`}>
                            {demand.body}
                            </Item.Header>                    
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
       </Segment.Group>
    )
}