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
     // Verifique se o lembrete está vazio
  if (this.state.novoLembrete.trim() === "") {
    this.setState({ mensagemDeErro: "Insira a descrição do lembrete." });
    return; // Sai da função para não salvar o lembrete 
  }

  // 1   Cria um novo objeto de lembrete com ID e favorito
  const novoLembreteObj = {
    id: Date.now(), // ID único para o React
    descricao: this.state.novoLembrete,
    favorito: false // O lembrete começa como não favorito
  };
  
  // 2 Cria uma nova lista, juntando a lista antiga com o novo lembrete
  const novaListaLembretes = [...this.state.lembretes, novoLembreteObj];
  
  // 3 Atualiza o estado com a nova lista e limpa o campo de texto
  this.setState({ 
    lembretes: novaListaLembretes,
    novoLembrete: "" ,
    mensagemDeErro: null // Limpa a mensagem de erro
  });
}

  // Remove um lembrete da lista pelo id
  removerLembrete = (id) => {
    const novaLista = this.state.lembretes.filter(lembrete => lembrete.id !== id);
    this.setState({ lembretes: novaLista });
}
  // Alterna entre exibir todos os lembretes ou apenas os favoritos
  alternarFiltro = () => {
    this.setState(estadoAnterior => ({
    filtro: estadoAnterior.filtro === 'todos' ? 'favoritos' : 'todos'
  }));
}

// Alterna o status de favorito de um lembrete
favoritarLembrete = (id) => {
  // Cria uma nova lista, mapeando e alternando o status 'favorito'
  const novaLista = this.state.lembretes.map(lembrete => {
    // Se a ID do lembrete for igual à ID passada, inverte o valor de 'favorito'
    if (lembrete.id === id) {
      return { ...lembrete, favorito: !lembrete.favorito };
    }
    return lembrete;
  });
  // Atualiza o estado com a nova lista
  this.setState({ lembretes: novaLista });
}
  constructor(props) {
    super(props);
    this.state = {
      lembretes: [
          { id: 1, descricao: "Estudar para a prova", favorito: false },
          { id: 2, descricao: "Comprar pão", favorito: true },
          { id: 3, descricao: "Beber água", favorito: false } 
       ],
      novoLembrete: "",
      filtro: 'todos',
      mensagemDeErro: null
    }
  }
  render(){

    const lembretesFiltrados = this.state.filtro === 'todos'
    ? this.state.lembretes
    : this.state.lembretes.filter(lembrete => lembrete.favorito);

    return (
      <div className="container">
        <div className= "row justify-content-center">
          <div className="col-12 colgit  ">
            <h1 className="display-5 text-center">Lembretes</h1>
            <LembreteEntrada 
            onLembreteAdicionado={this.adicionarLembrete} 
            valorDoInput={this.state.novoLembrete}
            onSalvarLembrete={this.salvarLembrete}
            />

            <button 
              className="btn btn-secondary mt-2 mb-3"
              onClick={this.alternarFiltro}>
              {this.state.filtro === 'todos' ? 'Exibir Apenas Favoritos' : 'Exibir Todos'}
            </button>

            {this.state.mensagemDeErro && (
            <div className="alert alert-danger mt-2">
            {this.state.mensagemDeErro}
            </div>
            )}

            <hr />
            
            <LembreteLista 
              lembretes={lembretesFiltrados}
              onRemoverLembrete={this.removerLembrete}
              onFavoritarLembrete={this.favoritarLembrete}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;