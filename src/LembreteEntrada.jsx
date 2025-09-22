const LembreteEntrada = (props) => {
    return (
      <div>
        <input type="text" className="form-control" placeholder="Digite seu novo lembrete" 
        onChange={ (evento) => { props.onlembreteAdicionado(evento.target.value)}}/>
        <button className="btn btn-primary mt-2">OK</button>
      </div>  
    );
}
export default LembreteEntrada;
