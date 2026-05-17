import Footer from '../components/Footer'

function Atividade5() {
  return (
    <>
      <header>
        <h1>Paleta de Cores do Projeto</h1>
      </header>

      <main className="container">

        <section className="card">
          <h2>Cor Principal</h2>

          <p>
            A cor principal escolhida foi o azul, pois transmite
            confiança, tecnologia, organização e tranquilidade.
          </p>
        </section>

        <section className="card">
          <h2>Tema Associado à Cor</h2>

          <p>
            O azul foi escolhido porque representa um projeto moderno,
            limpo e profissional.
          </p>
        </section>

        <section className="card">
          <h2>Tipo de Paleta</h2>

          <p>
            A paleta adotada é do tipo análoga.
          </p>
        </section>

        <section className="card">
          <h2>Cores da Paleta</h2>

          <div className="paleta">
            <div className="cor azul">#1D4ED8</div>
            <div className="cor azul-claro">#60A5FA</div>
            <div className="cor verde-agua">#14B8A6</div>
            <div className="cor cinza">#E5E7EB</div>
            <div className="cor escuro">#1F2937</div>
          </div>
        </section>

        <section className="caixa">
          <a href="/" className="botao-voltar">
            ⬅ Voltar para página principal
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Atividade5