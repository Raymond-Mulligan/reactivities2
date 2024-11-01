import React, { SyntheticEvent } from "react";
import { Button, Item, ItemExtra, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";


export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;
  const [target, setTarget] = React.useState('');

  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }



  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </Item.Description>
              <ItemExtra>
                <Button as={Link} to={`/activities/${activity.id}`} content='View' color='blue' floated='right' />
                <Button
                  name={activity.id}
                  loading={loading && target === activity.id} onClick={(e) => handleActivityDelete(e, activity.id)} content='Delete' color='red' floated='right' />
                <Label basic content={activity.category} />
              </ItemExtra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  )
})