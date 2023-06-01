import { Segment, List, Label, Item, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Demand } from '../../../app/models/demand'

interface Props {
    demand: Demand
}

export default observer(function TableDetailedSidebar ({demand: {demandees}}: Props) {
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
                {demandees.length} {demandees.length === 1 ? 'Demand' : 'Demands'} demands here
            </Segment>
            <Segment attached>
                <List relaxed divided>
                    {demandees.map(demandee => (
                        <Item key={demandee.body} style={{ position: 'relative' }}>
                            
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='h3'>
                                    <Link to={`/profiles/${demandee.body}`}></Link>
                                </Item.Header>
                                
                            </Item.Content>
                        </Item>
                    ))}
                </List>
            </Segment>
        </>

    )
})