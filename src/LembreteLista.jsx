const LembreteLista = (props) => {
    const { lembretes } = props;
    
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
      <li key={lembrete.id} className="list-group-item justify-content-between align-items-center">
      {lembrete.descricao}
      <button 
        className="btn btn-sm btn-outline-danger" 
        onClick={() => { props.onRemoverLembrete(lembrete.id) }}>
        <i className="fas fa-trash-alt"></i>
      </button>
      </li>
    ))}
  </ul>
    )

}

export default LembreteLista;

