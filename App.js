import React, { Component } from "react";
import StrongHiit from "./Countdown";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMenu: "mainMenuOn",
      strongHiit: "strongHiitOff"
    };

    this.handleStrong = this.handleStrong.bind(this);
  }

  handleStrong() {
    if (this.state.strongHiit === "strongHiitOff") {
      this.setState({
        strongHiit: "strongHiitOn",
        mainMenu: "mainMenuOff"
      });
    } else if (this.state.strongHiit === "strongHiitOn") {
      this.setState({
        strongHiit: "strongHiitOff",
        mainMenu: "mainMenuOn"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.mainMenu}>
          <div className="mainTopLine">
            <img src={require("./imgs/crunchLogo.png")} alt="" />
          </div>

          <div className="hiitZoneSection">
            <img
              src={require("./imgs/hiitzonetitle.png")}
              alt=""
              id="hiitZoneSectionTitle"
            />
            <div className="hiitZoneButtons">
              <button onClick={this.handleStrong} className="">
                <h2>Strong</h2>
              </button>
              <button onClick={this.handleStrong} className="">
                <h2>Extreme</h2>
              </button>
              <button onClick={this.handleStrong} className="">
                <h2>Punch</h2>
              </button>
              <button onClick={this.handleStrong} className="">
                <h2>Accelerate</h2>
              </button>
            </div>
          </div>

          <div className="groupFitnessSection">
            <div className="groupFitnessSectionTitleImg">
              <img src={require("./imgs/crunchPurple.png")} alt="" />
            </div>
            <div className="groupFitnessButtons">
              <button onClick={this.handleStrong} className="">
                <h2>Pilates</h2>
              </button>
              <button onClick={this.handleStrong} className="">
                <h2>Belly Butt & Things</h2>
              </button>
              <button onClick={this.handleStrong} className="">
                <h2>Pilates</h2>
              </button>
              <button onClick={this.handleStrong} className="">
                <h2>Pilates</h2>
              </button>
            </div>
          </div>
        </div>

        <div className={this.state.strongHiit}>
          <StrongHiit />
        </div>

        {this.state.strongHiit === "strongHiitOn" && (
          <button className="mainMenuButtonOn" onClick={this.handleStrong}>
            <img src={require("./imgs/mainMenu.png")} alt="" />
          </button>
        )}
      </div>
    );
  }
}
export default App;
