import React from "react";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className= "row">
          <div className="col-12">
            <h1 className="display-5 text-center">Lembretes</h1>
            <LembreteEntrada />
          </div>
        </div>
      </div>
    )
  }
}
export default App;