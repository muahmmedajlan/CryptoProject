import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WorkSpace from './pages/workSpace/WorkSpace';

function App() {
  return (
  
    <BrowserRouter >
      <Routes>
        <Route path="/work-space" exact element={<WorkSpace />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
