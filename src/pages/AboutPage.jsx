function AboutPage() {
  return (
    <section className="app-about" aria-labelledby="sobre-titulo">
      <div className="app-about__card">
        <h2 id="sobre-titulo">Sobre o projeto</h2>
        <p>
          Este trabalho foi desenvolvido na disciplina Programação Frontend da
          UNIVAS para praticar React: componentes, props, state e roteamento com
          React Router.
        </p>
      </div>
    </section>
  )
}

export default AboutPage