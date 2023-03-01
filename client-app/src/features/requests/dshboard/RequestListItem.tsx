import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Request } from "../../../app/models/request";
import React from "react";

interface Props {
  request: Request;
}
export default function RequestListItem({ request }: Props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as={Link} to={`/requests/${request.id}`}>
                {request.name}
              </Item.Header>
              <Button
                as={Link} to={`/requests/${request.id}`}
                color="teal"
                floated="right"
                content="View"
              />
              <Button
                color="green"
                floated="right"
                content="Select"
              />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}
