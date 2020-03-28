import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  const ong_id = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      const response = await api.post('incidents', data, {
        headers: {
          Authorization: ong_id
        }
      });
      //alert(`Caso ${response.data.id} cadastrado.`);
      history.push('/profile');
    }
    catch(err) {
      alert('Cadastro falhou. Tente novamente');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" /> 
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva seu caso detalhadamente para encontrar
            um herói para resolver isso.
          </p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
            </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição do caso" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}