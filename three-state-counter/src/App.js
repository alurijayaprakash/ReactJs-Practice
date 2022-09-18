import React,{useState} from "react";
import "./App.css"


function App(){

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Counter App using State/hooks</h1>
      </header>
      <h2>Current State of Counter is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      {/* <button onClick={() => setCount(count + 1)}>Increase Counter</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Decrease Counter</button> */}

      <button onClick={() => (count > 9 ? "" : setCount(count + 1))}>Increase Counter</button>
      {/* if count grater than 9 then do nothing, else increase by 1 */}

      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>Decrease Counter</button>


      
    </div>
  )
}

export default App;