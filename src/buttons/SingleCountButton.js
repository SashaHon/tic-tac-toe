import { useState } from "react";

function SingleCountButton() {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <button onClick={clickHandler}>
      You clicked {count} Single Count Button
    </button>
  );
}

export default SingleCountButton;
