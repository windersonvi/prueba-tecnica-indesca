//// Importaciones de React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importaciones de Componentes
import Users from './components/index/index.jsx'
import ReadUsers from './components/readusers/readusers.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/readUsers/:id" element={<ReadUsers />} />
      </Routes>
    </Router>
  );
}
export default App;