import './App.css';
import Logo from "./componentes/Logo";
import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import 'antd/dist/reset.css';
import Lancamentos from './componentes/Lancamentos';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Logo />
        <Header />
      </div>
      <Pesquisa />
      <Lancamentos />
    </div>
  );
}

export default App;
