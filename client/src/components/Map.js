import React, { Component } from 'react';
import USAMap from "react-usa-map";

class Map extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  statesFilling = () => {
    return {
        "AK": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/alaska/"
        },
        "HI": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/hawaii/"
        },
        "AL": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/alabama/"
        },
        "AR": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/arkansas/"
        },
        "AZ": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/arizona/"
        },
        "CA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/california/"
        },
        "CO": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/colorado/"
        },
        "CT": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/connecticut/"
        },
        "DE": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/delaware/"
        },
        "FL": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/florida/"
        },
        "GA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/georgia/"
        },
        "IA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/iowa/"
        },
        "ID": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/idaho/"
        },
        "IL": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/illinois/"
        },
        "IN": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/indiana/"
        },
        "KS": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/kansas/"
        },
        "KY": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/kentucky/"
        },
        "LA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/louisiana/"
        },
        "MA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/massachusetts/"
        },
        "MD": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/maryland/"
        },
        "ME": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/maine/"
        },
        "MI": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/michigan/"
        },
        "MN": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/minnesota!/"
        },
        "MO": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/missouri/"
        },
        "MS": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/mississippi/"
        },
        "MT": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/montana/"
        },
        "NC": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/carolina/"
        },
        "ND": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/north-dakota/"
        },
        "NE": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/nebraska/"
        },
        "NH": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/new-hampshire/"
        },
        "NJ": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/new-jersey/"
        },
        "NM": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/new-mexico/"
        },
        "NV": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/nevada/"
        },
        "NY": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/new-york/"
        },
        "OH": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/ohio/"
        },
        "OK": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/oklahoma/"
        },
        "OR": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/oregon/"
        },
        "PA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/pennsylvania/"
        },
        "RI": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/rhode-island/"
        },
        "SC": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/south-carolina/"
        },
        "SD": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/south-dakota/"
        },
        "TN": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/tennessee/"
        },
        "TX": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/texas/"
        },
        "UT": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/utah/"
        },
        "VA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/virginia/"
        },
        "VT": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/vermont/"
        },
        "WA": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/washington/"
        },
        "WI": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/wisconsin/"
        },
        "WV": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/west-virginia/"
        },
        "WY": {
            fill: "navy",
            clickHandler: () => window.location = "https://www.goodnewsnetwork.org/tag/wyoming/"
        }
    };
  };

  render() {
    return (
      <div className="App">
        <h1>USA Good News Map</h1>
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
        <p>More information: <a href="https://github.com/BendJohn/tv-tracker">GitHub</a></p>
      </div>
    );
  }
}

export default Map;