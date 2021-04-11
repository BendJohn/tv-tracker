import React from "react";
import Map from './components/Map';
import Carousel from './components/Carousel';

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="sans-serif">{!data ? "Loading..." : data}</p>
        <Carousel/>
      </header>
      <Map/>
    </div>
  );
}

export default App;
