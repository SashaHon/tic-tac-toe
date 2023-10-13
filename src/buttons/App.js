import "./App.css";
import SharedButton from "./SharedButton";
import SingleCountButton from "./SingleCountButton";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">My header</header>
      <SharedButton count={count} onClick={handleClick} />
      <SharedButton count={count} onClick={handleClick} />
      <SharedButton count={count} onClick={handleClick} />
      <SharedButton count={count} onClick={handleClick} />
      <SingleCountButton />
      <SingleCountButton />
      <SingleCountButton />
      <SingleCountButton />
    </div>
  );
}

export default App;
