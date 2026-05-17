import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Meu Sistema
          </a>

          <div>
            <a href="/login" className="btn btn-light">
              Login
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Usuários</h5>

                <p className="card-text">
                  Gerenciar usuários do sistema.
                </p>

                <a href="/painel" className="btn btn-primary">
                  Acessar
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Relatórios</h5>

                <p className="card-text">
                  Visualizar relatórios.
                </p>

                <button className="btn btn-primary">
                  Ver
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Configurações</h5>

                <p className="card-text">
                  Alterar configurações.
                </p>

                <button className="btn btn-primary">
                  Abrir
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <main>
        <section>
          <h2>Sobre o Projeto</h2>

          <p>
            Este projeto foi criado para praticar HTML e CSS
            no Visual Studio Code.
          </p>

          <article>
            <h3>Destaque da Página</h3>

            <p>
              Aqui você encontra acesso rápido para as atividades.
            </p>
          </article>
        </section>

        <aside>
          <h3>Informações Extras</h3>

          <p>
            Utilize o menu acima para navegar entre as páginas.
          </p>
        </aside>
      </main>

      <Footer />
    </>
  )
}

export default Home