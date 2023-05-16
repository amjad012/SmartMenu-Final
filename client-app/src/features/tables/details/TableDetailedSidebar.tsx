import React from 'react'
import { Segment, List, Label, Item, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Table } from '../../../app/models/table';

interface Props {
    table: Table;
}
export default observer(function TableDetailedSidebar ({ table:{attendees, host}}:Props) {
    if(!attendees) return null;
    return (
        <>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                {attendees.length}{attendees?.length === 1 ? ' Person' : ' People'} going
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {attendees.map(attendee => (
                         <Item style={{ position: 'relative' }}>
                         {attendee.username === host?.username &&
                         <Label
                             style={{ position: 'absolute' }}
                             color='orange'
                             ribbon='right'
                         >
                             Opened
                         </Label>}
                         <Image size='tiny' src={attendee.image} />
                         <Item.Content verticalAlign='middle'>
                             <Item.Header as='h3'>
                             <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                             </Item.Header>
                             
                         </Item.Content>
                     </Item>
                    ))}
                </List>
            </Segment>
        </>

    )
})
