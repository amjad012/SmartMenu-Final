import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';

export default observer(function TableForm() {
    const {tableStore} = useStore();
    const {selectedTable, createTable, updateTable, 
        loading, loadTable, loadingInitial} = tableStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [table, setTable] = useState({
        id: '',
        number: 0,
        date: ''
    });

    useEffect(() => {
        if (id) loadTable(id).then(table => setTable(table!));
    }, [id, loadTable]);

    function handleSubmit() {
        if (!table.id) {
            table.id = uuid();
            createTable(table).then(() => navigate(`/tables/${table.id}`))
        } else {
            updateTable(table).then(() => navigate(`/tables/${table.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setTable({ ...table, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Loading table...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder="Number" value={table.number} name='number' onChange={handleInputChange} />
        <Form.Input type='date'placeholder="Date" value={table.date} name='date' onChange={handleInputChange} />
            
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button as={Link} to='/tables' floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})