import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar'
import Counter from './components/Counter';

function App() {
  const [val, setVal] = useState(0);
  return (
    <div className="App">
      <NavBar txt="Counter app"/>
      <Counter val={val} setVal={setVal}/>
    </div>
  );
}

export default App;
