import "./styles.css";
import { useRef } from "react";
export default function App() {
  const inputRef = useRef();

  const resetInput = () => {
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input ref={inputRef} />
      <button onClick={resetInput}>pls</button>
    </div>
  );
}
