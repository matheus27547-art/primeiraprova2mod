import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NovaPage from './nova/NovaPage';
import FrutasPage from './frutas/FrutasPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/nova">Cadastrar Produto Novo</Link> |{" "}
          <Link to="/frutas">Listar Frutas</Link>
        </nav>

        <Routes>
          <Route path="/nova" element={<NovaPage />} />
          <Route path="/frutas" element={<FrutasPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;