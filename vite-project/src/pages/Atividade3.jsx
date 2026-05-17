import Footer from '../components/Footer'

import imagemG from '../assets/imagens/imagem-g.png'

function Atividade3() {
  return (
    <>
      <main>
        <h1>Atividade 3</h1>

        <p>
          Esta é a página da atividade 3 conectada com a página inicial.
        </p>

        <h2>Imagens</h2>

        <img src={imagemG} alt="Imagem dinâmica" />

        <br /><br />

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

export default Atividade3