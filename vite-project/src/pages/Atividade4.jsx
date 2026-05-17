import Footer from '../components/Footer'

import audio from '../assets/audio/audio.mp3'

function Atividade4() {
  return (
    <>
      <main>
        <section className="caixa">
          <h2>🎵 Áudio na página</h2>

          <audio controls autoPlay>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </section>

        <section className="caixa">
          <h2>🎥 Vídeo externo (YouTube)</h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5SAkVFmsZZc"
            title="YouTube video"
            allowFullScreen
          ></iframe>
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

export default Atividade4