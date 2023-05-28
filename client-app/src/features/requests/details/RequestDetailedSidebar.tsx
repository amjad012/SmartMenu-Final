import { Segment, List, Label, Item, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { Request } from '../../../app/models/request';

interface Props {
    request: Request
}

export default observer(function RequestDetailedSidebar ({request: {requests}}: Props) {
    if (!requests) return null;
    return (
        <>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                {requests.length}
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {requests.map(request => (
                        <Item key={request.name} style={{ position: 'relative' }}>       
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3'>
                                    {request.name}
                                </Item.Header>
                                
                            </Item.Content>
                        </Item>
                    ))}
                </List>
            </Segment>
        </>

    )
})