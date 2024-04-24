import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavBar } from './componentes/navbar';
import { Index } from './componentes/index';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Index></Index>
    </div>
  );
}

export default App;
