import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item } from 'semantic-ui-react';
import { Table } from '../../../app/models/table';
import { useStore } from '../../../app/stores/store';

interface Props {
    table : Table
}
export default function TableListItem({table}:Props) {

    const {tableStore} = useStore();
    const {deleteTable, loading} = tableStore;
    
    const [target, setTarget] = useState('');

    function handleDeleteTable(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteTable(id)
    }
    return (
        <Item key={table.id}>
        <Item.Content>
            <Item.Header as='a'>{table.number}</Item.Header>
            <Item.Meta>{table.date}</Item.Meta>
            <Item.Description>
               <h2>description here</h2>
            </Item.Description>
            <Item.Extra>
                <Button as={Link} to={`/tables/${table.id}`} floated='right' content='View' color='blue'/>
                <Button loading={loading && target === table.id}
                        name={table.id} floated='right' content='Delete'
                        color='red'
                        onClick={(e) => handleDeleteTable(e, table.id)}/>
               
            </Item.Extra>
        </Item.Content>
    </Item>
    )
}