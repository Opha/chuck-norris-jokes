import "./App.css";

import { useState } from "react";

import Image from "./components/Image";
import Joke from "./components/Joke";
import Button from "./components/Button";

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      <Image />
      <Joke clicked={clicked} setClicked={setClicked} />
      <Button clicked={clicked} setClicked={setClicked} />
    </div>
  );
}

export default App;
