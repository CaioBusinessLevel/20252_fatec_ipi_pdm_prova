import React from "react"; 
import LembreteLista from "./LembreteLista";
import LembreteEntrada from "./LembreteEntrada"; 

// gere a lista de lembretes
class App extends React.Component {

  // função que lê o que é digitado
  adicionarLembrete = (lembrete) => {
    this.setState({ novoLembrete : lembrete })
  }

  constructor(props) {
    super(props);
    this.state = {
      lembretes: []
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
            
            <LembreteLista lembretes={this.state.lembretes} />
          </div>
        </div>
      </div>
    )
  }
}
export default App;