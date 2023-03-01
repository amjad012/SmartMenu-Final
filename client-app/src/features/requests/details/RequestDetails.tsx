import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {Button, Grid} from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from '../../../app/stores/store';
import RequestDetailedHeader from "./RequestDetailedHeader";


export default observer(function RequestDetails() {
    const {requestStore} = useStore();
    const {selectedRequest: request, loadRequest, loadingInitial} = requestStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadRequest(id);
    }, [id, loadRequest])

    if (loadingInitial || !request) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <RequestDetailedHeader request={request}/>
            </Grid.Column>
            <Grid.Column width={6}>
               
            </Grid.Column>
        </Grid>
    )
})