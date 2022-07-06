import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '././Pages/Landing/Landing.js';
import Details from '././Pages/Details/Details.js';
import './App.css';
import { useState } from 'react';




function App() {
  const [addItems, setAddItems] = useState([]);
  const onAdd = (item) => {
    const exist = addItems.find(x => x.id === item.id);
    if (exist) {
      setAddItems(addItems.map(x => x.id === item.id ? {...exist} : x));
      } else {
      setAddItems([{...item}]);
    }
  }
  
 
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path='/' element={<Landing onAdd={onAdd}/>} />
         <Route path='/details' element={<Details  onAdd={onAdd} addItems={addItems} />} /> 
        </Routes>
      </div>
      </Router>
  );
}
export default App;
