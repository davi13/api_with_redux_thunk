import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//REDUX
import { Provider } from "react-redux";
import store from "./conf/conf-store";

//Components
import Post from "./components/Post";
import Postform from "./components/Postform";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Api with Redux</h1>
          </header>
          <Postform />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
