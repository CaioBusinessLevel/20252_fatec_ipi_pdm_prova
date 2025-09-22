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
      <li key={lembrete.id} className="list-group-item">
        {lembrete.descricao}
      </li>
    ))}
  </ul>
    )

}

export default LembreteLista;

