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


export default () => {
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
            Calender PlaceHolder
          </Container>
      </SpaceBetween>
      
    </ContentLayout>
  );
}