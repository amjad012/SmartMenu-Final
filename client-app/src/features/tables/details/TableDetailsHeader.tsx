import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {Table} from "../../../app/models/table";
import { format } from "date-fns";
import { useStore } from '../../../app/stores/store';


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
    table: Table
}

export default observer (function TableDetailedHeader({table}: Props) {
    const {tableStore:{updateAttendance,loading}} = useStore();
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/sale.jpg`} fluid style={tableImageStyle}/>
                <Segment style={tableImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={table.number}
                                    style={{color: 'white'}}
                                />
                                <p>{format(table.date!, 'dd MMM yyyy')}</p>
                                <p>
                                    Opened by <strong><Link to={`/profile/${table.host?.username}`}>{table.host?.displayName}</Link></strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                {table.isHost ? (
                    <Button as={Link} to={`/manage/${table.id}`} color='orange' floated='right'>
                    Manage Table
                </Button>
                ) : table.isGoing ? (
                    <Button loading={loading} onClick={updateAttendance}>Cancel attendance</Button>
                ) : (
                    <Button loading={loading} onClick={updateAttendance} color='teal'>Join Table</Button>
                )}        
            </Segment>
        </Segment.Group>
    )
})
