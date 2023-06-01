import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Grid} from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from '../../../app/stores/store';
import DemandDetailedSidebar from "../../demands/details/DemandDetailedSidebar";
import demandStore from "../../../app/stores/demandStore";

export default observer(function DemandDetails() {
    const {demandStore} = useStore();
    const {selectedDemand: demand, loadDemands, loadingInitial, clearSelectedDemand} = demandStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadDemands();
        return() => clearSelectedDemand();
    }, [id, loadDemands,clearSelectedDemand])

    if (loadingInitial || !demand) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={6}>
                <DemandDetailedSidebar demand ={demand}/>
            
            </Grid.Column>
        </Grid>
    )
})