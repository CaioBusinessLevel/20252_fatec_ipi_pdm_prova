import React from "react"; 
import LembreteLista from "./LembreteLista";
import LembreteEntrada from "./LembreteEntrada"; 

// gere a lista de lembretes
class App extends React.Component {

  // função que lê o que é digitado
  adicionarLembrete = (lembrete) => {
    this.setState({ novoLembrete : lembrete })
  }

  // função será chamada quando o botão Adicionar for clicado
  salvarLembrete = () => {
    console.log('Salvar Lembrete foi chamado!');
  }

  // Remove um lembrete da lista pelo id
  removerLembrete = (id) => {
    const novaLista = this.state.lembretes.filter(lembrete => lembrete.id !== id);
    this.setState({ lembretes: novaLista });
}

  constructor(props) {
    super(props);
    this.state = {
      lembretes: [
          { id: 1, descricao: "Estudar para a prova" },
          { id: 2, descricao: "Comprar pão" },
          { id: 3, descricao: "Beber água" }
       ],
      novoLembrete: ""
    }
  }
  render(){
    return (
      <div className="container">
        <div className= "row">
          <div className="col-12">
            <h1 className="display-5 text-center">Lembretes</h1>
            <LembreteEntrada 
            onLembreteAdicionado={this.adicionarLembrete} valorDoInput={this.state.novoLembrete}/>

            <hr />
            
            <LembreteLista 
              lembretes={this.state.lembretes}
              onRemoverLembrete={this.removerLembrete}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;