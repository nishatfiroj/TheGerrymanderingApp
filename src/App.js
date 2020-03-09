import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GettingInvolved from "./Routes/gettingInvolved";
import CaseStudyTemplate from "./Routes/caseStudyTemplate";
import History from "./Routes/history";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Route path="/history" component={History} />
          <Route path="/gettingInvolved" component={GettingInvolved} />
          {/* <Route path="/blank" component={Blank} /> */}
          <Route path="/caseStudy1" component={CaseStudyTemplate} />
          <Route path="/caseStudy2" component={CaseStudyTemplate} />
          <Route path="/caseStudy3" component={CaseStudyTemplate} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
