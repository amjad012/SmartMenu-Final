import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import RequestList from "./RequestList";


export default observer(function RequestDashboard() {
    const {requestStore} = useStore();
    const {loadRequests, requestRegistry} = requestStore;

    useEffect(() => {
        if (requestRegistry.size <= 1) loadRequests();
    }, [loadRequests])
  
    if (requestStore.loadingInitial) return <LoadingComponent content='Loading app...' />
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <RequestList />
            </Grid.Column>
            <Grid.Column width='6'>
                
            </Grid.Column>
        </Grid>
    )
})