import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import {Header, Item, Segment} from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import TableListItem from './TableListItem';

export default observer(function TableList() {
    const {tableStore} = useStore();
    const {groupedTables} = tableStore;
    
    
    return (
        <>
            {groupedTables.map(([group, tables]) =>(
                 <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
            <Segment>
            <Item.Group divided>
                {tables.map(table => (
                    <TableListItem key={table.id} table={table} />
                ))}
                </Item.Group>
            </Segment>
        </Fragment>
            ))}
        </>
        
    )
})
