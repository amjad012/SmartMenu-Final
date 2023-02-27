import { observer } from 'mobx-react-lite'
import React from 'react'
import {Segment, Header, Comment, Form, Button, Container} from 'semantic-ui-react'

export default observer(function TableDetailedChat() {
    return (
        <>
            <Segment
                textAlign='center'
                attached='top'
                inverted
                color='blue'
                style={{border: 'none'}}
            >
                <Header>Table Requests</Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Bob</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>Cleaning the table</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Sally</Comment.Author>
                            <Comment.Metadata>
                                <div>2 mins ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Check</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                       
                        <Button
                            content='Send Reqeust'
                            labelPosition='left'
                            icon='edit'
                            positive
                        />
                        <Button
                            content='Requests List'
                            floated='right'
                            icon='list'
                            color='blue'
                        />
                    </Form>
                </Comment.Group>
            </Segment>
            <Segment 
                textAlign='center'
                attached='top'
                inverted
                color='red'
                style={{border: 'none', marginTop:'30px'}}
            >
                <Header>Table Orders</Header>
            </Segment>
            <Segment attached >
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Bob</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>Pizza</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='/assets/user.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Sally</Comment.Author>
                            <Comment.Metadata>
                                <div>2 mins ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Tuna Sandwish</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        
                        <Button
                            content='Order now'
                            labelPosition='left'
                            icon='edit'
                            positive
                        />
                        <Button
                            content='Food Menu'
                            floated='right'                       
                            color='red'
                            icon='clipboard list'
                        />
                    </Form>
                </Comment.Group>
            </Segment>
          
        </>

    )
})