import React, { Component } from "react";
import {
  Accordion,
  Card,
  Container,
  Jumbotron,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";

export default class History extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#8b9dc3" }}>
        <Container>
          <Jumbotron style={{ backgroundColor: "#b3cde0" }}>
            <h1>History of Gerrymandering</h1>
            <p>Learn the history of Gerrymandering</p>
          </Jumbotron>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                style={{ backgroundColor: "#b3cde0" }}
              >
                What is gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="0"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  Gerrymandering is the practice of drawing political boundaries
                  of{" "}
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              the subdivision of a state that is designed to
                              provide that district with representation in the
                              state’s legislative body or Congress
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            electoral districts
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  in favor of political interests that may or may not actually
                  align with that of the population.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="1"
              >
                When did gerrymandering start?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="1"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  Gerrymandering started in 1788, but it was not given a name
                  until 1812.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="2"
              >
                Why is it called gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="2"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  The word gerrymandering has two parts. The first, “gerry,”
                  refers to Elbridge Gerry, who set the{" "}
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              the process of drawing district boundaries
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            redistricting
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  maps of 1812. The second, “mandering,” refers to one district
                  that Mr. Gerry drew, which bore a striking resemblance to a
                  salamander.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="3"
              >
                When does gerrymandering happen?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="3"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  Gerrymandering happens when redistricting happens, which is
                  every ten years, following that year’s
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              an official survey of a population that records
                              details of individuals such as age, race,
                              socio-economic status, etc.
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            census
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  .
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="4"
              >
                What does gerrymandering affect?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="4"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  It affects the elections of the state’s members of the House
                  of Representatives, as well as any
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              usually referred to as the “Legislature” or
                              “General Assembly,” this is more or less the
                              state-wide equivalent of Congress
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            state legislative bodies
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  . It also contributes to
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              this term is used to describe environmental
                              injustice that occurs in practice and in policy
                              within a racialized context
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            environmental racism
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  ,
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              a situation within a legislative body where there
                              is difficulty passing legislation
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            gridlock{" "}
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  in Congress, and a decrease in
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              elections where there is a ‘close race,’ meaning
                              the majority is very sblack
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            competitive elections
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  .
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="5"
              >
                Who does the gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="5"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  The state’s legislative bodies and governor are in the
                  position to gerrymander districts in favor of their political
                  party and against their opponent’s political party.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="6"
              >
                Are there different types of gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="6"
                style={{ backgroundColor: "#6497b1" }}
              >
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
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="7"
              >
                If gerrymandering is so bad, why hasn't it stopped?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="7"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  The US court system has actually deemed extreme cases of
                  gerrymandering as
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              not in accordance with the U.S. Constitution
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            unconstitutional{" "}
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  . However, they have found it difficult to develop a standard
                  of unconstitutionality to judge cases of gerrymandering by.
                  Overall, they have found that
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              process in which district lines are drawn to
                              prevent racial minorities from electing their
                              preferred candidates
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            negative racial gerrymandering
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  violates constitutional rights, but have passed the decision
                  about partisan and bipartisan gerrymandering to the states and
                  Congress. So, this has led the states and Congress to attempt
                  to develop remedies to partisan gerrymandering, such as
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              a body other than the government that is tasked
                              with drawing district lines
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            redistricting commissions
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  .
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="8"
              >
                Can gerrymandering ever be good?{" "}
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="8"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  Gerrymandering can be used to connect minority groups that may
                  be geographically separated. This is called{" "}
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              process in which district lines are drawn so that
                              racial minorities have a better chance of electing
                              their preferred candidates
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            affirmative racial gerrymandering
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  .
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="9"
              >
                How can we fix gerrymandering?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="9"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  There are several proposed methods for remedying
                  gerrymandering. They are using
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              a set of rules that govern how district lines must
                              be drawn, and these rules do not depend on who is
                              currently in office (and thus may be drawing the
                              lines)
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            neutral redistricting criteria
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  , utilizing redistricting commissions, and making
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              voting systems that do not rely on redistricting
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            alternative voting systems
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  .
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                style={{ backgroundColor: "#b3cde0" }}
                eventKey="9"
              >
                Why is gerrymandering important?
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey="9"
                style={{ backgroundColor: "#6497b1" }}
              >
                <Card.Body>
                  Gerrymandering is important because it can make districts more
                  fair toward
                  <>
                    {["top"].map((placement) => (
                      <>
                        <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                            <Tooltip id={`tooltip-${placement}`}>
                              the people who live within a district
                            </Tooltip>
                          }
                        >
                          <Button
                            style={{ backgroundColor: "#b3cde0" }}
                            variant="outline-black"
                          >
                            constituents
                          </Button>
                        </OverlayTrigger>{" "}
                      </>
                    ))}
                  </>
                  , or less fair toward constituents.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    );
  }
}
