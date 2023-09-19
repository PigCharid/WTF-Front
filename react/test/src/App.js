import { useState } from "react";
import "./App.css";
import Mycomponent from "./components/Mycomponent";

function App() {
  const [test, setTest] = useState(1);
  return (
    <div className="App">
      <button
        onClick={() => {
          setTest(2);
        }}
      > 
        test
      </button>
      <Mycomponent />
    </div>
  );
}

export default App;
