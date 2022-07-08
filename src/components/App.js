import React, {useState} from 'react';
import '../css/App.scss';
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const [mousable, setMousable] = useState(false)

  return (
    <div className="App flex flex-col">
      <Navbar mousable={mousable} />
      <Home mousable={mousable} setMousable={setMousable} />
      {mousable && <About />}
      {mousable && <Contact />}
    </div>
  );
}

export default App;
