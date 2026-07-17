import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Warmup from './pages/Warmup/Warmup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal: Muestra la Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta de calentamiento: Muestra la nueva pantalla limpia */}
        <Route path="/calentamiento" element={<Warmup />} />
      </Routes>
    </Router>
  );
}

export default App;