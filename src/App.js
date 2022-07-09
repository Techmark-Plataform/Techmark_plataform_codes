import './App.css';
import React from "react";
import Commerce from './pages/Commerce';
import SearchArea from './pages/search';
import Subscription from './pages/Subscription';
import User from './pages/User';
import Setting from './components/settingsUser/settings';
import Home from './pages/home';
import Mercados from "./pages/mercados";
import Beleza from './pages/beleza';
import Servicos from './pages/servicos';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Restaurantes from './pages/restaurantes';
import Roupas from './pages/roupas';

function App() {
  return (
    <div className="App">
      {<BrowserRouter>
      <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/comercio" element={<Commerce/>} />
      <Route path = "/busca" element={<SearchArea/>} />
      <Route path = "/inscricao" element={<Subscription />} />
      <Route path = "/usuario" element={<User />}/>
      <Route path = "/configusuario" element={<Setting/>} />
      <Route path = "/busca/mercados" element={<Mercados/>} />
      <Route path = "/busca/beleza" element={<Beleza/>} />
      <Route path = "/busca/servicos" element={<Servicos/>} />
      <Route path = "/busca/roupas" element={<Roupas/>} />
      <Route path = "/busca/restaurantes" element={<Restaurantes/>} />


    </Routes>
    </BrowserRouter>}
    </div>
  );
}

export default App;
