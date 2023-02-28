import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';

export default observer(function RequestForm() {
    const {requestStore} = useStore();
    const {selectedRequest, createRequest, updateRequest, 
        loading, loadRequest, loadingInitial} = requestStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [request, setRequest] = useState({
        id: '',
        name: '',
        date: ''
    });

    useEffect(() => {
        if (id) loadRequest(id).then(request => setRequest(request!));
    }, [id, loadRequest]);

    function handleSubmit() {
        if (!request.id) {
            request.id = uuid();
            createRequest(request).then(() => navigate(`/requests/${request.id}`))
        } else {
            updateRequest(request).then(() => navigate(`/requests/${request.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setRequest({ ...request, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Loading request...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input placeholder="Name" value={request.name} name='name' onChange={handleInputChange} />            
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button as={Link} to='/requests' floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})