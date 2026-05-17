import Footer from '../components/Footer'

function Login() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{ width: '350px' }}>

          <h3 className="text-center mb-3">Login</h3>

          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                placeholder="Digite seu email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Senha</label>

              <input
                type="password"
                className="form-control"
                placeholder="Digite sua senha"
              />
            </div>

            <button className="btn btn-primary w-100">
              Entrar
            </button>
          </form>

          <a href="/" className="btn btn-link mt-2">
            Voltar
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login