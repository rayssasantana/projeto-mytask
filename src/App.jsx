import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade"
import Rodape from "./components/Rodape";
import NovaTarefa from "./pages/NovaTarefa";
import Tarefas from "./pages/Tarefas";
import EditarTarefa from "./pages/EditarTarefa";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";
// BrowserRouter: componente essencial para conduzir o roteamento no navegador.
// Route: indicamos a rota (path) e o elemento que será exibido na tela.

function App() {
  // O estado de usuário indica se ele está logado ou não na aplicação
  // null = deslogado. Se ele tiver logado, terá um objeto dentro desse estado
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Monitora/detecta o usuário conectado/desconectado. Quando a autentificação mudar, vou ficar sabendo.
    onAuthStateChanged(auth, (user) => {
      // user é nulo -> usuário delogou
      // se tem objeto -> usuário logou
      setUsuarioLogado(user); // temos um estado com as infos acima
      setLoading(false);
    });
  }, []);

  if(loading) {
    // Este elemento será exibido enquanto a aplicação estiver sendo carregada, se for null, não será exibido nada
    return null; // <div>Carregando...</div>  adicionar algum elemento interessante, pode ser o <Loader/>, ou retornar null;
  }

  // Usuário.Provider é o elemento que irá compartilhar um valor/dado para os componentes filhos da aplicação

  return (
    <>
      <UsuarioContext.Provider value={usuarioLogado}> {/* o que está no value é acessível para todo esse componentes abaixo*/}
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/politicas-de-privacidade" element={<PoliticaPrivacidade/>} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
          <Route path="/tarefas/editar/:id" element={<EditarTarefa/>} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Rodape />
      </BrowserRouter>
      <Toaster position="bottom-right"/>
      </UsuarioContext.Provider>
    </>
  );
}

export default App;