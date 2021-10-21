import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
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
    const store = ConfigureStore();
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
