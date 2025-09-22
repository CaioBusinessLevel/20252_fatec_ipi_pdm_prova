const LembreteEntrada = (props) => {
    return (
      <div>
        <input type="text" className="form-control" placeholder="Digite seu novo lembrete" 
        onChange={ (evento) => { props.onLembreteAdicionado(evento.target.value)}}/>
        <button className="btn btn-primary mt-2">Adicionar</button>
      </div>  
    );
}
export default LembreteEntrada;
