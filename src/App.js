import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009"
    )
      .then(res => res.json())
      .then(res => this.setState({ items: res }));
  }

  render() {
    console.log(this.state.items.report);
    return (
      <div>
        <div>hey</div>
      </div>
    );
  }
}

export default App;
