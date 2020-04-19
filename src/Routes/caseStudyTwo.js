import React, { Component } from "react";
import { Container, Image, Jumbotron, Figure, Row, Col } from "react-bootstrap";
import first from "../Assets/caseStudies/caseStudy2.1.png";
import second from "../Assets/caseStudies/caseStudy2.2.png";

export default class CaseStudyTwo extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#8b9dc3" }}>
        <Container>
          <Jumbotron style={{ backgroundColor: "#b3cde0" }}>
            <h1>Partisan Gerrymandering</h1>
            <p>Redistricting that favors one particular political party</p>
          </Jumbotron>
          <Row>
            <Col>
              <p class="float-left">
                Utah hasn’t voted for a Democratic candidate in a presidential
                election since 1968. However, the state’s largest metropolitan
                area, Salt Lake City, is comparatively liberal; its previous
                seven mayors have been Democrats. Because the Utah State
                Legislature is overwhelmingly controlled by the Republican
                Party, it has been able to draw district boundaries that
                effectively dilute voters in Salt Lake City by spreading them
                across three of the state’s four congressional districts.
                Nevertheless, a Democratic challenger defeated the 4th
                district’s Republican incumbent in 2018, changing the
                congressional delegation to a 3-1 Republican majority.
              </p>
            </Col>
            <Col>
              <Figure class="float-right">
                <Image src={first} rounded className="mb-3" />
                <Figure.Caption style={{ color: "black" }}>
                  An example of Partisan Gerrymandering in Utah
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col>
              <p class="float-left">
                Throughout much of its history, Maryland’s 6th congressional
                district represented a primarily rural and conservative
                population. However, following the 2010 census, Maryland’s
                Democratic state legislature redrew this district’s boundaries
                to include blue-learning areas in Montgomery County, including
                some Washington D.C. suburbs. As a result, the district flipped
                in 2012, ousting Republican Roscoe Bartlett, who had served in
                the U.S. House of Representatives since 1993. Although
                Republican voters in Maryland filed a federal lawsuit, the U.S.
                Supreme Court dismissed the case in 2019 on the grounds that
                questions of partisan gerrymandering represented a
                nonjusticiable political question.
              </p>
            </Col>
            <Col>
              <Figure class="float-right">
                <Image src={second} rounded className="mb-3" />
                <Figure.Caption style={{ color: "black" }}>
                  An example of Partisan Gerrymandering in Maryland
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
