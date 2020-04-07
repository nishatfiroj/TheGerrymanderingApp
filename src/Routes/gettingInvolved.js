import React, { Component } from "react";
import { Container, Button, Jumbotron, ListGroup } from "react-bootstrap";
export default class GettingInvolved extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1>Getting Involved</h1>
            <p>
              One of the best ways to get involved is to contact the Georgia
              Governor. Another thing you can do is Rally support through
              Atlanta’s local government by contacting the majoy's office or
              constituent services. Gerrymandering happens following the{" "}
              <a href={" www.2020census.gov/"}>census</a>, so make sure to
              participate if you haven’t already.
            </p>
            <Button href="https://gov.georgia.gov/contact-us" className="mb-3">
              Georgia Governor's Link
            </Button>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Atlanta's Local Government: 404.330.6100
              </ListGroup.Item>
              <ListGroup.Item>
                Constituent Services: 404.330.6023{" "}
              </ListGroup.Item>
            </ListGroup>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
