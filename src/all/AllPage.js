import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const AllPage = () => {
  const [listaProdutos, setListaProdutos] = useState([]);

  const loadList = () => {
    api.get("/produtos")
      .then(res => setListaProdutos(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadList();
  }, []);

  const removeFromList = (id) => {
    api.delete("/produtos/" + id)
      .then(res => {
        loadList(); 
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.preco}</td>
              <td onClick={() => removeFromList(produto.id)} style={{ color: 'red', cursor: 'pointer' }}>
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPage;