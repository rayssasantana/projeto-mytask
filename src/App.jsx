import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import PoliticaProvacidade from "./pages/PoliticaPrivacidade"
import Rodape from "./components/Rodape";
import NovaTarefa from "./pages/NovaTarefa";

// BrowserRouter: componente essencial para conduzir o roteamento no navegador.
// Route: indicamos a rota (path) e o elemento que será exibido na tela.

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/politicas-de-privacidade" element={<PoliticaProvacidade/>} />
          <Route path="/novatarefa" element={<NovaTarefa />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;