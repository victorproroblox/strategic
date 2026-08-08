import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Warmup from './pages/Warmup/Warmup';
import GamesHub from './pages/Games/GamesHub';
import { GAMES } from './pages/Games/gamesConfig';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal: Muestra la Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Ruta de calentamiento: Muestra la nueva pantalla limpia */}
        <Route path="/calentamiento" element={<Warmup />} />

        {/* Hub de juegos y sus rutas hijas, generadas desde gamesConfig */}
        <Route path="/juegos" element={<GamesHub />} />
        {GAMES.map((game) => (
          <Route key={game.id} path={game.path} element={<game.component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;