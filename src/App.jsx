import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Routine from './pages/Routine';
import Navbar from '../src/components/Navbar';
import ToDoList from './pages/To-Do-List';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/To-Do-List" element={<ToDoList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;