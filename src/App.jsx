import './App.css'
import Header from './componenets/Header'
function App() {
  return (
    <>
    <Header/>

    

      {/* <!-- conteudo da pagina --> */}
      <main>
        <section>
          <h2 id="exemplo-get">Seção de listas: </h2>
          <h3>Lista nao ordenada:</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <h3>Lista ordenada</h3>
          <ol>
            <li>Primeiro item</li>
            <li>Segundo item</li>
            <li>Terceiro item</li>
          </ol>
        </section>
        <section>
          <h2>Imagens e Videos</h2>
          <figure>
            <img src="https://itpetblog.com.br/wp-content/uploads/2019/07/caes-na-praia.jpg"
              alt="Imagem de um cachorro na praia" width="450" height="300" />
          </figure>
          <h3>Video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GyBtXKq_zoI?si=Edh_JMF_eCW-vSlI"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <section class="last">
          <h2>Formulário Simples</h2>
          <form>
            <div>
              <label for="nome">Nome:</label>
              <input type="text" name="nome" id="nome" required />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label for="mensagem">Mensagem:</label>
              <textarea name="mensagem" id="mensagem"></textarea>
            </div>
            <div>
              <label for="idade">Idade:</label>
              <input type="number" name="idade" id="idade" min="1" max="100" />
            </div>
            <div>
              <label for="cor">Cor:</label>
              <input type="color" name="cor" id="cor" />
            </div>
            <div>
              <label for="anexo">Anexo:</label>
              <input type="file" name="anexo" id="anexo" />
            </div>

            <button type="submit">Enviar</button>
            <button id='buttonExemploJS' type="button"> Exemplo JS</button>

          </form>
        </section>

      </main>


      {/* <!-- rodapé --> */}
     

    </>
  )
}

export default App