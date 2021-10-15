import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CAMPSITES } from "./shared/campsites";
import Main from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
