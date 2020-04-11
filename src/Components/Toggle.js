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
                <Container>
                    Click the buttons to toggle the map. <br/>
                </Container>
                <Row>
                    <Col>
                        <Button variant="outline-info" onClick={this._showCompactAlgoMap.bind(null, true)}>Compact Algorithm Map</Button>
                        <Button variant="outline-info" onClick={this._showCompactMap.bind(null, true)}>Compact Map</Button>
                        <Button variant="outline-info" onClick={this._showCompetitiveMap.bind(null, true)}>Competitive Map</Button>
                        <Button variant="outline-info" onClick={this._showCurrentMap.bind(null, true)}>Current Map</Button>
                        <Button variant="outline-info" onClick={this._showDemMap.bind(null, true)}>Democrat Favoring Map</Button>
                        <Button variant="outline-info" onClick={this._showGOPMap.bind(null, true)}>GOP Favoring Map</Button>
                        <Button variant="outline-info" onClick={this._showMajMinMap.bind(null, true)}>Majority vs Minority Map</Button>
                        <Button variant="outline-info" onClick={this._showPartisanMap.bind(null, true)}>Partisan Map</Button>
                    </Col>
                    <Col>
                        <Row>
                            { this.state.showCompactAlgoMap && (<CompactAlgoMap/>) }
                        </Row>
                        <Row>
                            { this.state.showCompactMap && (<CompactMap/>) }
                        </Row>
                        <Row>
                            { this.state.showCompetitiveMap && (<CompetitiveMap/>) }
                        </Row>
                        <Row>
                            { this.state.showCurrentMap && (<CurrentMap/>) }
                        </Row>
                        <Row>
                            { this.state.showDemMap && (<DemMap/>) }
                        </Row>
                        <Row>
                            { this.state.showGOPMap && (<GOPMap/>) }
                        </Row>
                        <Row>
                            { this.state.showMajMinMap && (<MajMinMap/>) }
                        </Row>
                        <Row>
                            { this.state.showPartisanMap && (<PartisanMap/>) }            
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        
        )
    }
}