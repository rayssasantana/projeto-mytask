import { Button, Badge, Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { deleteTarefa, getTarefas, getTarefasUsuario } from "../firebase/tarefas";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";


function Tarefas() {
    const [tarefas, setTarefas] = useState(null); // null porque inicialmente não tenho dados.
    // Recuperamos a informação do usuário (se está logado ou não)
    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate();

    // A função pega os dados da lista e mostra no console
    function carregarDados() {
        // O then devolve a lista de tarefas da coleção
        if(usuario) {
            getTarefasUsuario(usuario.uid).then((resultados) => { // resultados é o retorno da função getTarefas
            setTarefas(resultados);
            });
        }
    }

    function deletarTarefa(id) {
        const deletar = confirm("Tem certeza?");
        if(deletar) {
            deleteTarefa(id).then(() => {
               toast.success("Tarefa removida com sucesso!"); 
               //Trazer a lista de tarefas atualizada
               carregarDados(); // pega os dados do banco e seta no estado
            });
        }
    }

    // Executar uma função quando o componente é renderizado a primeira vez. Para não ficar executando a função toda vez.
    useEffect(() => {
        carregarDados();
    }, []);

    // Renderização condicional. Se o usuário não está logado
    if(usuario === null) {
        // Navegar para outra página
        return <Navigate to="/login" /> 
    }

    return (
        <main>
            <Container className="mt-5">
                <h1>Suas tarefas</h1>
                <hr />
                <Link className="btn btn-dark" to="/tarefas/adicionar">
                 Adicionar tarefa
                </Link>
                {tarefas ? <section className="mt-2">
                  {tarefas.map((tarefa) => {
                    return <Card key={tarefas.id} className="mb-2">
                        <Card.Body>
                            <Card.Title>{tarefa.titulo}</Card.Title>
                            <Card.Text>{tarefa.descricao}</Card.Text>
                            <div className="mb-2">
                                {tarefa.concluido ? 
                                    <Badge bg="success me-2">Concluído</Badge> 
                                    : <Badge bg="warning  me-2">Pendente</Badge>}
                                    <Badge>{tarefa.categoria}</Badge>
                            </div>
                            <Button variant="dark me-2" onClick={() =>{
                                navigate(`/tarefas/editar/${tarefa.id}`)
                            }}>Editar</Button>
                            <Button variant="danger" onClick={() => deletarTarefa(tarefa.id)}>
                                Excluir
                            </Button>
                        </Card.Body>
                    </Card>
                  })}      
                </section> : <Loader/>}
            </Container>
        </main>
    );
}

export default Tarefas;