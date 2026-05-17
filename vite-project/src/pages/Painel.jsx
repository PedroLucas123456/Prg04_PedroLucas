function Painel() {
    return (
      <div className="container mt-5">
  
        <h2 className="mb-4">Lista de Usuários</h2>
  
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>João</td>
              <td>joao@email.com</td>
              <td>
                <span className="badge bg-success">Ativo</span>
              </td>
            </tr>
  
            <tr>
              <td>Maria</td>
              <td>maria@email.com</td>
              <td>
                <span className="badge bg-warning text-dark">
                  Pendente
                </span>
              </td>
            </tr>
  
            <tr>
              <td>Carlos</td>
              <td>carlos@email.com</td>
              <td>
                <span className="badge bg-danger">Inativo</span>
              </td>
            </tr>
          </tbody>
        </table>
  
        <a href="/" className="btn btn-secondary">
          Voltar
        </a>
      </div>
    )
  }
  
  export default Painel