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
                as={Link}
                to={`/manage/${request.id}`}
                color="teal"
                floated="right"
                content="Edit"
              />
              <Button
                as={Link}
                to={`/requests/${request.id}`}
                color="red"
                floated="right"
                content="Delete"
              />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
}
