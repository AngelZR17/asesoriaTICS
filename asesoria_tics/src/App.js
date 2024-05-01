import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from "react-router-dom";
import { NavBar } from './componentes/navbar';
import { Index } from './componentes/index';
import { CFE } from './componentes/cfe';
import { CONAGUA } from './componentes/conagua';
import { INFINITUM } from './componentes/infinitum';
import { FACEBOOK } from './componentes/facebook';
import { WHATSAPP } from './componentes/whatsapp';
import { NAVEGADORES } from './componentes/navegadores';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element= {<Index></Index>}></Route>
          <Route path='/cfe' element= {<CFE></CFE>}></Route>
          <Route path='/conagua' element= {<CONAGUA></CONAGUA>}></Route>
          <Route path='/infinitum' element= {<INFINITUM></INFINITUM>}></Route>
          <Route path='/facebook' element= {<FACEBOOK></FACEBOOK>}></Route>
          <Route path='/whatsapp' element= {<WHATSAPP></WHATSAPP>}></Route>
          <Route path='/navegadores' element= {<NAVEGADORES></NAVEGADORES>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
