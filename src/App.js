import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '././Pages/Landing/Landing.js';
import Details from '././Pages/Details/Details.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path='/' element={<Landing/>} />
         <Route path='/details' element={<Details/>} /> 
        </Routes>
      </div>
      </Router>
  );
}
export default App;
