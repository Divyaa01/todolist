
import { useState } from 'react';
import './App.css';

function App() {

const [inputValue, setInputValue] = useState("");
const [tasks, setTasks] = useState([]);

const addTask = () =>{
  if( inputValue.trim()!== ""){
  setTasks([...tasks , inputValue]);
  setInputValue("");
  }
}

  return (
    <div className="App">
      <h2>To-do List</h2>
      <input 
      type ="text"
      value= {inputValue}
      onChange = {(e) => setInputValue(e.target.value)}
      placeholder ="add here"/>

      <button onClick ={addTask}> Add tasks</button>

      {
        <ul>
          {
            tasks.map((task) =>
            (
              <li>{task}</li>
            ))
          }
        </ul>
      }
    </div>
  );
}

export default App;
