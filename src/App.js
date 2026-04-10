import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewPage from './new/NewPage';
import AllPage from './all/AllPage';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/new">Cadastrar Produto Novo</Link> |{" "}
          <Link to="/all">Listar Produtos</Link>
        </nav>

        {/* Hierarquia das Rotas */}
        <Routes>
          <Route path="/new" element={<NewPage />} />
          <Route path="/all" element={<AllPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;