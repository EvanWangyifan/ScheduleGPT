// React
import * as React from "react";
// AWS Cloudscape
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
// ./components
import TaskAttribtueEditor from "./components/attribute_editor";
import Calendar from "./components/calendar";


export default () => {
  const [myEvents, setEvents] = React.useState([{
    id: 0,
    title: 'DDDD',
    start: new Date(2023, 8, 21, 17, 0, 0),
    end: new Date(2023, 8, 21, 19, 0, 0),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2023, 8, 21, 12, 0, 0),
    end: new Date(2023, 8, 21, 15, 0, 0),
  },
  {
    id: 2,
    title: 'Some Event',
    start: new Date(2023, 8, 20, 0, 0, 0),
    end: new Date(2023, 8, 20, 1, 2, 3),
  },
  {
    id: 3,
    title: 'XXXXDDD Event',
    start: new Date(2023, 8, 20, 11, 0, 0),
    end: new Date(2023, 8, 20, 14, 2, 3),
  },
  {
    id: 4,
    title: 'Third Event',
    start: new Date(2023, 8, 19, 17, 0, 0),
    end: new Date(2023, 8, 19, 20, 30, 3),
  }]);

  return (
    <ContentLayout
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            description="ChatGPT will help you with your schedule"
          >
            Schedule GPT
          </Header>
        </SpaceBetween>
      }
    >

      <SpaceBetween size="m">
          <Container
            header={
              <Header
                variant="h2"
                description="Please enter your tasks one by one"
              >
                Adding Tasks
              </Header>
            }
          >
            <SpaceBetween size="m">
              <TaskAttribtueEditor />
              <Button variant="primary">Generate Schedule</Button>
            </SpaceBetween>
          </Container>
          <Container
            header={
              <Header
                variant="h2"
                description="Please view your schedule here"
              >
                View Schedule
              </Header>
            }
          >
            <Calendar
              myEventsList={myEvents}
            />
          </Container>
      </SpaceBetween>
    </ContentLayout>
  );
}