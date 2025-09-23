import React from 'react';
import PropTypes from 'prop-types';

const LembreteLista = ({ lembretes, onRemoverLembrete, onFavoritarLembrete }) => {
  if (lembretes.length === 0) {
    return(
      <div className="alert alert-info text-center">
        Nenhum lembrete cadastrado ainda.
      </div>
    )
  }
  return (
    <ul className="list-group">
      {lembretes.map(lembrete => (
        <li key={lembrete.id} className="list-group-item d-flex justify-content-between align-items-center">
          {lembrete.descricao}
          <div>
            {/* Ícone de lixeira (primeiro) */}
            <i 
              className="fas fa-trash-alt me-2" 
              style={{ cursor: 'pointer' }} 
              onClick={() => { onRemoverLembrete(lembrete.id) }}>
            </i>
            {/* Ícone de favoritar (segundo) */}
            <i
              className={`far fa-star ${lembrete.favorito ? 'text-warning fas' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => { onFavoritarLembrete(lembrete.id) }}
            ></i>
          </div>
        </li>
      ))}
    </ul>
  )
};
LembreteLista.propTypes = {
  lembretes: PropTypes.array.isRequired,
  onRemoverLembrete: PropTypes.func.isRequired,
  onFavoritarLembrete: PropTypes.func.isRequired,
};
export default LembreteLista;