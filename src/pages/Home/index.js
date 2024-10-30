import {Header} from "../../components/Header";
import background from "../../assets/git2.png";
import "./styles.css";
import ItemList from '../../components/ItemList';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="conteudo">
          <img src={background}  className="background" alt="background app"/>

          <div className="info">
            <div>
              <input name="usuario" placeholder="@username" />
              <button>Buscar</button>
            </div>
            <div className="perfil">
              <img src="https://avatars.githubusercontent.com/u/87581372?v=4" className="profile" alt="Foto profile"/>
              <div>
                <h3>Luiz Ricardo</h3>
                <span>@luiz-ricardo-dev</span>
                <p>Desenvolvedor FullStack .NET/JAVA. Focado em criação de APIs e Microservices.</p>
              </div>
            </div>
            <hr />
            <div>
              <h4>Repositórios</h4>
              <ItemList title="Teste1" description="Teste de descrição" />
              <ItemList title="Teste1" description="Teste de descrição" />
              <ItemList title="Teste1" description="Teste de descrição" />
            </div>
          </div>

        </div>
    </div>
  );
};

export default App;
