import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid, GridRow } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import DemandList from "./DemandList";

export default observer(function DemandDashboard() {
    const {demandStore} = useStore();
    const {loadDemands, demandRegistry} = demandStore;

    useEffect(() => {
        if (demandRegistry.size <= 1) loadDemands();
    }, [loadDemands])
  
    if (demandStore.loadingInitial) return <LoadingComponent content='Loading demands...' />
    
    return (
        <Grid columns={3} divided>  
            <Grid.Row >            
                    <DemandList/>
            </Grid.Row>          
        </Grid>
    )
})