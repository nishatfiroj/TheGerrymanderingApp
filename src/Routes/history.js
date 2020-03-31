import React, { Component } from "react";
import {
  Accordion,
  Card,
  Container,
  Jumbotron,
  OverlayTrigger,
  Tooltip,
  Button
} from "react-bootstrap";

export default class History extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1>History of Gerrymandering</h1>
            <p>Learn the history of Gerrymandering</p>
          </Jumbotron>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                What is gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Gerrymandering is the practice of drawing political boundaries
                  of
                  <OverlayTrigger
                    key="test"
                    placement="test"
                    overlay={
                      <Tooltip id={`tooltip-$"aa"`}>
                        the subdivision of a state that is designed to provide
                        that district with representation in the state’s
                        legislative body or Congress
                      </Tooltip>
                    }
                  >
                    <Button variant="success" className="ml-1">
                      electoral districts
                    </Button>
                  </OverlayTrigger>
                  in favor of political interests that may or may not actually
                  align with that of the population.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                When did gerrymandering start?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Gerrymandering started in 1788, but it was not given a name
                  until 1812.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Why is it called gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  The word gerrymandering has two parts. The first, “gerry,”
                  refers to Elbridge Gerry, who set the
                  <OverlayTrigger
                    key="test"
                    placement="test"
                    overlay={
                      <Tooltip id={`tooltip-$"aa"`}>
                        the process of drawing district boundaries
                      </Tooltip>
                    }
                  >
                    <Button variant="success" className="ml-1">
                      redistricting
                    </Button>
                  </OverlayTrigger>
                  maps of 1812. The second, “mandering,” refers to one district
                  that Mr. Gerry drew, which bore a striking resemblance to a
                  <OverlayTrigger
                    key="test"
                    placement="test"
                    overlay={
                      <Tooltip id={`tooltip-$"aa"`}>
                        amphibians that look like long, slimy lizards
                      </Tooltip>
                    }
                  >
                    <Button variant="success" className="ml-1">
                      salamander
                    </Button>
                  </OverlayTrigger>
                  .
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                When does gerrymandering happen?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Gerrymandering happens when redistricting happens, which is
                  every ten years, following that year’s census.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                What does gerrymandering affect?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  It affects the elections of the state’s members of the House
                  of Representatives, as well as any state legislative bodies.
                  It also contributes to environmental racism, gridlock in
                  Congress, and a decrease in competitive elections.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                Who does the gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  The state’s legislative bodies and governor are in the
                  position to gerrymander districts in favor of their political
                  party and against their opponent’s political party.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                Are there different types of gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  Yes! There is partisan and bipartisan gerrymandering and
                  racial gerrymandering. Partisan gerrymandering is where the
                  redistricting is aimed to favor one political party or weaken
                  another. Bipartisan gerrymandering is used to protect
                  incumbents by multiple political parties. Racial
                  gerrymandering is aimed to weaken the power of minority voters
                  by splitting them into different districts.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                If gerrymandering is so bad, why hasn't it stopped?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  The US court system has actually deemed extreme cases of
                  gerrymandering as unconstitutional. However, they have found
                  it difficult to develop a standard of unconstitutionality to
                  judge cases of gerrymandering by. Overall, they have found
                  that negative racial gerrymandering violates constitutional
                  rights, but have passed the decision about partisan and
                  bipartisan gerrymandering to the states and Congress. So, this
                  has led the states and Congress to attempt to develop remedies
                  to partisan gerrymandering, such as redistricting commissions.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8">
                Can gerrymandering ever be good?{" "}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
                  Gerrymandering can be used to connect minority groups that may
                  be geographically separated. This is called affirmative racial
                  gerrymandering.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9">
                How can we fix gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  There are several proposed methods for remedying
                  gerrymandering. They are using neutral redistricting criteria,
                  utilizing redistricting commissions, and making alternative
                  voting systems.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9">
                Why is gerrymandering important?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  Gerrymandering is important because it can make districts more
                  fair toward constituents, or less fair toward constituents.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    );
  }
}
