
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import api from '../utils/api';

const NewPage = () => {
  const [form, setForm] = useState({ nome: "", descricao: "", preco: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/produtos", form)
      .then((data) => {
        setForm({ nome: "", descricao: "", preco: "" });
        alert("Produto adicionado com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          id="nome" 
          name="nome" 
          label="Nome: " 
          value={form.nome} 
          onChange={handleChange} 
        />
        <Input 
          id="descricao" 
          name="descricao" 
          label="Descrição: " 
          value={form.descricao} 
          onChange={handleChange} 
        />
        <Input 
          id="preco" 
          name="preco" 
          label="Preço: " 
          value={form.preco} 
          onChange={handleChange} 
        />
        <Button onClick={handleSubmit} style={{ backgroundColor: 'green', color: 'white' }}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default NewPage;