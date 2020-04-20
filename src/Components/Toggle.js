import React, { Component } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import CompactAlgoMap from "./Maps/CompactAlgoMap";
import CompactMap from "./Maps/CompactMap";
import CompetitiveMap from "./Maps/CompetitiveMap";
import CurrentMap from "./Maps/CurrentMap";
import DemMap from "./Maps/DemMap";
import GOPMap from "./Maps/GOPMap";
import MajMinMap from "./Maps/MajMinMap";
import PartisanMap from "./Maps/PartisanMap";
import "./mapstyle.css";

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      showCompactAlgoMap: false,
      showCompetitiveMap: false,
      showCompactMap: false,
      showCurrentMap: false,
      showDemMap: false,
      showGOPMap: false,
      showMajMinMap: false,
      showPartisanMap: false,
    };
  }

  _showCompactAlgoMap = (bool) => {
    this.setState({
      showCompactAlgoMap: bool,
      showCompactMap: false,
      showCompetitiveMap: false,
      showCurrentMap: false,
      showDemMap: false,
      showGOPMap: false,
      showMajMinMap: false,
      showPartisanMap: false,
    });
  };

  _showCompactMap = (bool) => {
    this.setState({
      showCompactMap: bool,
      showCompactAlgoMap: false,
      showCompetitiveMap: false,
      showCurrentMap: false,
      showDemMap: false,
      showGOPMap: false,
      showMajMinMap: false,
      showPartisanMap: false,
    });
  };

  _showCompetitiveMap = (bool) => {
    this.setState({
      showCompetitiveMap: bool,
      showCompactMap: false,
      showCompactAlgoMap: false,
      showCurrentMap: false,
      showDemMap: false,
      showGOPMap: false,
      showMajMinMap: false,
      showPartisanMap: false,
    });
  };

  _showCurrentMap = (bool) => {
    this.setState({
      showCurrentMap: bool,
      showCompactMap: false,
      showCompetitiveMap: false,
      showCompactAlgoMap: false,
      showDemMap: false,
      showGOPMap: false,
      showMajMinMap: false,
      showPartisanMap: false,
    });
  };

  _showDemMap = (bool) => {
    this.setState({
      showDemMap: bool,
      showCompactMap: false,
      showCompetitiveMap: false,
      showCompactAlgoMap: false,
      showCurrentMap: false,
      showGOPMap: false,
      showMajMinMap: false,
      showPartisanMap: false,
    });
  };

  _showGOPMap = (bool) => {
    this.setState({
      showGOPMap: bool,
      showCompactMap: false,
      showCompetitiveMap: false,
      showCompactAlgoMap: false,
      showCurrentMap: false,
      showDemMap: false,
      showMajMinMap: false,
      showPartisanMap: false,
    });
  };

  _showMajMinMap = (bool) => {
    this.setState({
      showMajMinMap: bool,
      showGOPMap: false,
      showCompactMap: false,
      showCompetitiveMap: false,
      showCompactAlgoMap: false,
      showCurrentMap: false,
      showDemMap: false,
      showPartisanMap: false,
    });
  };

  _showPartisanMap = (bool) => {
    this.setState({
      showPartisanMap: bool,
      showGOPMap: false,
      showCompactMap: false,
      showCompetitiveMap: false,
      showCompactAlgoMap: false,
      showCurrentMap: false,
      showDemMap: false,
      showMajMinMap: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container className="pad" style={{fontFamily: 'Roboto Slab'}}>
          Click the buttons to toggle the maps. Navigate over each map and 
          click where you live to see how district lines affect who 
          represents you.
          <br />
        </Container>
        <Container style={{fontFamily: 'Roboto Slab'}}>
          <Row className="center">
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showCompactAlgoMap.bind(null, true)}
            >
              Compact Algorithm Map
            </Button>
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showCompactMap.bind(null, true)}
            >
              Compact Map
            </Button>
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showCompetitiveMap.bind(null, true)}
            >
              Competitive Map
            </Button>
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showCurrentMap.bind(null, true)}
            >
              Current Map
            </Button>
          </Row>
          <Row className="secondRow">
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showDemMap.bind(null, true)}
            >
              Democrat Favoring Map
            </Button>
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showGOPMap.bind(null, true)}
            >
              GOP Favoring Map
            </Button>
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showMajMinMap.bind(null, true)}
            >
              Majority vs Minority Map
            </Button>
            <Button
              className="buttonPad"
              variant="outline-dark"
              onClick={this._showPartisanMap.bind(null, true)}
            >
              Partisan Map
            </Button>
          </Row>
        </Container>
        <Container style={{fontFamily: 'Roboto'}}>
          <Row>
            {this.state.showCompactAlgoMap && (
              <div>
                <Row>
                  <Col>
                    <CompactAlgoMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>Compact Algorithm Map</h3>
                    <p>
                      An algorithm draws these congressional districts to be 
                      compact. This map minimizes the mean distance between 
                      each resident and the geographic center of their district. 
                      The algorithm doesn't care about party or race (meaning 
                      this map could violate the Voting Rights Act) and it 
                      ignores the borders of cities and counties.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.showCompactMap && (
              <div>
                <Row>
                  <Col>
                    <CompactMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>Compact Map</h3>
                    <p>
                      This map simulates the approach a non-partisan commission 
                      could take when it is charged with drawing compact-shaped 
                      districts — irrespective of party or race (meaning this 
                      map might violate the Voting Rights Act). It aims to use 
                      counties as district building blocks, and divides them as 
                      many times as possible to create districts that are 
                      similarly populated. Wherever feasible, counties nest 
                      whole districts.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.showCompetitiveMap && (
              <div>
                <Row>
                  <Col>
                    <CompetitiveMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>Competitive Map</h3>
                    <p>
                      This map aims to promote more competitive elections by 
                      increasing the number of districts where both parties have 
                      at least one in six chances of winning — no matter what 
                      form those districts need. The map also maintains current 
                      districts with majority minority groups. The map seeks to 
                      make them as competitive as possible where highly 
                      competitive districts are not feasible.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.showCurrentMap && (
              <div>
                <Row>
                  <Col>
                    <CurrentMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>Current Map</h3>
                    <p>
                      These are the actual boundaries of the congressional 
                      district, shaded by how likely a group is to represent 
                      it in the long run. It is not a general election 
                      prediction for 2018.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.showDemMap && (
              <div>
                <Row>
                  <Col>
                    <DemMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>Democrat Favoring Map</h3>
                    <p>
                      The map is designed to increase the number of districts 
                      that typically vote Democratic — seats where a Democrat 
                      has a chance of winning the election greater than 5 in 6.
                      {" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.showGOPMap && (
              <div>
                <Row>
                  <Col>
                    <GOPMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>GOP Favoring Map</h3>
                    <p>
                      This map is designed to increase the number of districts 
                      that typically vote Republican — seats where a Republican 
                      has a chance of winning the election in excess of 5 in 6.
                    {" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.showMajMinMap && (
              <div>
                <Row>
                  <Col>
                    <MajMinMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>Majority vs Minority Map</h3>
                    <p>
                      This map is designed to increase the number of 
                      "majority-minority districts "— districts where a majority 
                      of the voting-age population is made up of representatives 
                      of a single minority. Where additional districts of the 
                      majority-minority are not necessary, the map settles for 
                      districts of the "coalition," in which no ethnic group, 
                      including non-Hispanic white voters, constitutes a 
                      majority population. If no districts can be formed where 
                      white voters are a minority, the map seeks to make 
                      districts with the largest possible shares of non-white 
                      voters.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.showPartisanMap && (
              <div>
                <Row>
                  <Col>
                    <PartisanMap />
                  </Col>
                  <Col>
                    <h3 style={{fontFamily: 'Roboto Slab'}}>Partisan Map</h3>
                    <p>
                      This map is drawn with the intention of matching the 
                      political composition of the state's electorate with the 
                      party breakdown of members in a state. For example, if a 
                      state has 10 districts and Republicans in the last two 
                      presidential elections won an average of 70 percent of 
                      their major-party votes, seven districts are drawn to 
                      favor Republicans and three are drawn to favor Democrats. 
                      There are a few states where a proportionally 
                      representative map can not be drawn-in those states, we 
                      made the map as similar as possible to proportional.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}