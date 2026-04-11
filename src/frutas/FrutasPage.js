import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const FrutasPage = () => {
  const [listaFrutas, setlistaFrutas] = useState([]);

  const loadList = () => {
    api.get("/frutas")
      .then(res => setlistaFrutas(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadList();
  }, []);

  const removeFromList = (id) => {
    api.delete("/frutas/" + id)
      .then(res => {
        loadList(); 
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lista de Frutas</h1>
      <table >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
      <tbody >
          {listaFrutas.map(fruta => (
            <tr key={fruta.id}>
              <td>{fruta.nome}</td>
              <td>{fruta.descricao}</td>
              <td>{fruta.preco}</td>
              <td onClick={() => removeFromList(fruta.id)} style={{ color: 'red', cursor: 'pointer' }}>
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrutasPage;