import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GettingInvolved from "./Routes/gettingInvolved";
import CaseStudyOne from "./Routes/caseStudyOne";
import CaseStudyTwo from "./Routes/caseStudyTwo";
import CaseStudyThree from "./Routes/caseStudyThree";
import Home from "./Components/Toggle";
import History from "./Routes/history";
import { Container } from "react-bootstrap";


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Container fluid style={{fontFamily: 'Roboto Slab'}}>
          <Router>
            <NavBar />
            <Route path="/home" component={Home} />
            <Route path="/history" component={History} />
            <Route path="/gettingInvolved" component={GettingInvolved} />
            <Route path="/caseStudy1" component={CaseStudyOne} />
            <Route path="/caseStudy2" component={CaseStudyTwo} />
            <Route path="/caseStudy3" component={CaseStudyThree} />
          </Router>
        </Container>

      </React.Fragment>
    );
  }
}

export default App;
