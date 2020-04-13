import React, { Component } from "react";
import {Container, Button, Col, Row} from 'react-bootstrap';
import CompactAlgoMap from "./Maps/CompactAlgoMap";
import CompactMap from "./Maps/CompactMap";
import CompetitiveMap from "./Maps/CompetitiveMap";
import CurrentMap from "./Maps/CurrentMap";
import DemMap from "./Maps/DemMap";
import GOPMap from "./Maps/GOPMap";
import MajMinMap from "./Maps/MajMinMap";
import PartisanMap from "./Maps/PartisanMap";
import './mapstyle.css';

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
        }
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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

    render() {
        return (
            <React.Fragment>
                <Container className="pad">
                    Click the buttons to toggle the map. <br/>
                </Container>
                <Container>
                    <Row className="center">
                        <Button className="buttonPad" variant="outline-info" onClick={this._showCompactAlgoMap.bind(null, true)}>Compact Algorithm Map</Button>
                        <Button className="buttonPad" variant="outline-info" onClick={this._showCompactMap.bind(null, true)}>Compact Map</Button>
                        <Button className="buttonPad" variant="outline-info" onClick={this._showCompetitiveMap.bind(null, true)}>Competitive Map</Button>
                        <Button className="buttonPad" variant="outline-info" onClick={this._showCurrentMap.bind(null, true)}>Current Map</Button>
                        <Button className="buttonPad" variant="outline-info" onClick={this._showDemMap.bind(null, true)}>Democrat Favoring Map</Button>
                        <Button className="buttonPad" variant="outline-info" onClick={this._showGOPMap.bind(null, true)}>GOP Favoring Map</Button>
                        <Button className="buttonPad" variant="outline-info" onClick={this._showMajMinMap.bind(null, true)}>Majority vs Minority Map</Button>
                        <Button className="buttonPad" variant="outline-info" onClick={this._showPartisanMap.bind(null, true)}>Partisan Map</Button>
                    </Row>
                    <Row>
                        <Col>
                            
                            { this.state.showCompactAlgoMap && (
                            <div>
                                <p>These congressional districts are drawn by an algorithm to be compact. This map minimizes the average distance between each citizen and their district's geographic center. The algorithm doesn’t care about party or race (meaning this map could violate the Voting Rights Act) and ignores city and county boundaries. </p>
                                <CompactAlgoMap/>
                            </div>
                            ) }
                        </Col>
                        <Col>
                            { this.state.showCompactMap && (
                            <div>
                                <p>This map simulates the approach that a nonpartisan commission might take if tasked with drawing districts with compact shapes — without regard to party or race (meaning that this map could violate the Voting Rights Act). It seeks to use counties as district building blocks and splits them only as many times as necessary to create equally populous districts. Where possible, entire districts are nested within counties.</p>
                                <CompactMap/>
                            </div>
                            ) }
                        </Col>
                        <Col>
                            { this.state.showCompetitiveMap && (
                            <div>
                                <p>This map seeks to encourage more competitive elections by maximizing the number of districts where both parties have at least a 1-in-6 chance of winning — no matter what shape those districts require. The map also preserves existing majority-minority districts. Where highly competitive districts aren’t possible, the map tries to make them as competitive as possible.</p>
                                <CompetitiveMap/>
                            </div>
                            ) }
                        </Col>
                        <Col>
                            { this.state.showCurrentMap && (
                            <div>
                                <p>These are the current congressional district boundaries, shaded by how likely each is to be represented by a party over the long term. This is not a forecast of the 2018 midterm elections.</p>
                                <CurrentMap/>
                            </div>
                            ) }
                        </Col>
                        <Col>
                            { this.state.showDemMap && (
                            <div>
                                <p>This map is drawn to maximize the number of districts that usually vote Democratic — seats where a Democrat has greater than a 5-in-6 chance of winning the election.</p>
                                <DemMap/>
                            </div>
                            ) }
                        </Col>
                        <Col>
                            { this.state.showGOPMap && (
                            <div>
                                <p>This map is drawn to maximize the number of districts that usually vote Republican — seats where a Republican has greater than a 5-in-6 chance of winning the election.</p>
                                <GOPMap/>
                            </div>
                            ) }
                        </Col>
                        <Col>
                            { this.state.showMajMinMap && (
                            <div>
                                <p>This map is drawn to maximize the number of “majority-minority districts” — districts where members of a single minority group make up a majority of the voting-age population. Where additional majority-minority districts are not possible, the map settles for “coalition” districts, in which no racial group, including non-Hispanic white voters, makes up a majority of the population. If it’s not possible to create any districts where white voters are a minority, the map tries to make districts with the highest possible shares of nonwhite voters.</p>
                                <MajMinMap/>
                            </div>
                            ) }
                        </Col>
                        <Col>
                            { this.state.showPartisanMap && (
                            <div>
                                <p>This map is drawn with the goal of making the partisan breakdown of a state’s representatives match the political makeup of the state’s voters. For example, if a state has 10 districts and Republicans won an average of 70 percent of its major-party votes in the last two presidential elections, seven districts are drawn to favor Republicans and three are drawn to favor Democrats. There are a few states in which a proportionally partisan map can’t be drawn — in those states, we made the map as close to proportional as possible.</p>
                                <PartisanMap/>
                            </div>
                            ) }
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        
        )
    }
}