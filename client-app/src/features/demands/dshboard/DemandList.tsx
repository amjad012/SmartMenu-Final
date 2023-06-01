import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Header,Grid} from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import demandStore from '../../../app/stores/demandStore';
import DemandListItem from './DemandListItem';

export default observer(function DemandList() {
    const { demandStore } = useStore();
    const { groupedDemands } = demandStore;


    return (
        <>
            {groupedDemands.map(([group, demands]) => (
                <Grid key={group} columns={3} divided >
                    {demands.map(demand => (
                        <DemandListItem key={demand.id} demand={demand} />
                    ))}
                </Grid>
            ))}
        </>

    )
})
