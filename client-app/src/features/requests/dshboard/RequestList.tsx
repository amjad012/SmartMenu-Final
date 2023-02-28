import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { Header, Item, Segment } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import RequestListItem from './RequestListItem';


export default observer(function RequestList() {
    const { requestStore } = useStore();
    const { groupedRequests } = requestStore;


    return (
        <>
            {groupedRequests.map(([group, requests]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {requests.map(request => (
                        <RequestListItem key={request.id} request={request} />
                    ))}

                </Fragment>
            ))}
        </>

    )
})
