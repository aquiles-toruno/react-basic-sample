import { useState } from "react";
import MyButton from "./components/MyButton";
import MyLabel from "./components/MyLabel";

function App() {
  const [counter, setCounter] = useState(0);
  const sum = (event) => {
    setCounter(counter + 1);
  }
  const reset = (event) => {
    setCounter(0);
  }

  let message = `The value of counter is: ${counter}`

  return (
    <>
      <MyButton onClick={sum} title="Add 1" />
      <MyButton onClick={reset} title="Reset" />
      <MyLabel text={message} />
    </>
  )
}

export default App;
