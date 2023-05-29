import './App.css';
import Logo from "./componentes/Logo";
import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Logo />
        <Header />
      </div>
      <Pesquisa />
    </div>
  );
}

export default App;
