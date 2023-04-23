import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [btn, setBtn] = useState("");

     const handleClick = () => {
          setBtn(btn => !btn)
     }

     let toggleClass = btn ? "dark" : null;
  return (
    <div className="App">
        <button onClick={handleClick}>
            toggle
        </button>
        <Home className={ `${toggleClass}` }/>
    </div>
  );
}

export default App;
