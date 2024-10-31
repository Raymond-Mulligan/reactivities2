import React, { SyntheticEvent } from "react";
import { Activity } from "../../../app/models/activity";
import { Button, Item, ItemExtra, Label, Segment } from "semantic-ui-react";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
  cancelSelectActivity: () => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity, submitting, cancelSelectActivity }: Props) {

  const [target, setTarget] = React.useState('');

  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
    cancelSelectActivity();
  }

  return (
    <Segment>
      <Item.Group divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </Item.Description>
              <ItemExtra>
                <Button onClick={() => selectActivity(activity.id)} content='View' color='blue' floated='right' />
                <Button
                  name={activity.id}
                  loading={submitting && target === activity.id} onClick={(e) => handleActivityDelete(e, activity.id)} content='Delete' color='red' floated='right' />
                <Label basic content={activity.category} />
              </ItemExtra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  )
}