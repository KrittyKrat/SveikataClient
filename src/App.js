import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Institutions from './pages/Institutions';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/institutions" element={<Institutions />} />
      </Routes>
    </>
  );
}

export default App;
