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
        <div>
            <p>Aqui vão aparecer os lembretes...</p>
        </div>
    )

}

export default LembreteLista;

