import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WorkSpace from './pages/workSpace/WorkSpace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/work-space" exact element={<WorkSpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
