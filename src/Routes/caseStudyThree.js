import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default class CaseStudyThree extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#e1e8f7" }}>
        <Container style={{fontFamily: 'Roboto Slab'}}>
          <Jumbotron style={{ backgroundColor: "#b3cde0" }}>
            <h1>"Fair" Gerrymandering</h1>
            <p>
              There are not many examples of “fair” gerrymandering, or
              gerrymandering of a state that is representative of the beliefs of
              its constituents. So, ask yourself, how do we get “fair”
              gerrymandering, and what might stand in the way? If you are
              particularly interested in this topic, make sure to visit our
              Getting Involved page.
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
