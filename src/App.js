import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GettingInvolved from "./Routes/gettingInvolved";
import CaseStudyOne from "./Routes/caseStudyOne";
import CaseStudyTwo from "./Routes/caseStudyTwo";
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
          <Route path="/caseStudy1" component={CaseStudyOne} />
          <Route path="/caseStudy2" component={CaseStudyTwo} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
