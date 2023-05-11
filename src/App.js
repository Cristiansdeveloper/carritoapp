
import './App.css';
import Listadearticulos from './components/listadearticulos';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <header>
      <Header />
      </header>
      <Listadearticulos />
    </div>
  );
}

export default App;
