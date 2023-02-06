import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/questions";
import Answares from "./components/answares";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
    <div>
      <main>
        <Routes>
          <Route exact path='/' element={<Questions/>} />        
          <Route path='/answare/:id' element={<Answares/>} />
        </Routes>
      </main>
    </div>
  </Router>;
    </div>
  );
}

export default App;
