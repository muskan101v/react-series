import { useState } from "react";
import "./App.css";

/* Ui updation will controll by React

tree parsing in react from babel 

useState hook is to use propogate changes in DOM, we can pass any default value ,
it gives two values in array format
 
*/

function App() {
  // it give variable value , one method to set the state , method name kuch bhi ho skta hai
  const [counter, setCounter] = useState(0);
  // const counter = 5;

  const AddValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const RemoveValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}>Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={RemoveValue}>Remove Value: {counter}</button>
    </>
  );
}

export default App;
