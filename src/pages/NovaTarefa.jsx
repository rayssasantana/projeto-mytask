import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addTarefa } from "../firebase/tarefas";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";


function NovaTarefa() {
    const { 
    register,
    handleSubmit, 
    formState: { errors } 
    } = useForm();
    
    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate(); // função que leva o usuário para qualquer página que eu quiser, forçadamente.

    function salvarTarefa(data) {
        // Os dados do formulário são passadas para a função de inserir
        // Then: aguarda a insernção da tarefa para então exibir o toast
        // Novo campo no documento que acossia o usuário e a tarefa que ele criou
        data.idUsuario = usuario.uid; // usuário que vem do firebase
        addTarefa(data)
         .then(() => {
            toast.success("Tarefa adicionada com sucesso!");
            // Redirecionar o usuário para /tarefas
            navigate("/tarefas"); // mas só suporta links internos. "navegação imperativa". Colocar em eventos.

        })
         .catch(() => {
            toast.error("Um erro aonteceu ao adicionar a tarefa!");
        });
    }

    // Lógica de renderização condicional, vai sempre no final da função
    if(usuario === null) {
        return <Navigate to="/login" />
    }

    return (
        <main className="mt-4">
            <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
                <h1>Adicionar tarefa</h1>    
                <hr />            
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input 
                    type="text" 
                    id="titulo" 
                    className="form-control"
                    {...register("titulo", { required: true, maxLength: 200 })}
                    />
                    {errors.titulo && <small className="invalid">O título é inválido</small>}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea 
                    id="descricao" 
                    className="form-control"
                    {...register("descricao", { required: true })}
                    ></textarea>
                    {errors.descricao && <small className="invalid">A descrição é inválida</small>}
                </div>
                <div>
                    <label htmlFor="dataConclusao">Data</label>
                    <input 
                    type="date" 
                    id="dataConclusao" 
                    className="form-control"
                    {...register("dataConclusao")}
                    />
                </div>
                <div className="form-check mt-3">
                    <input 
                    type="checkbox" 
                    id="concluido" 
                    className="form-check-input"
                    {...register("concluido")}
                    />
                    <label htmlFor="concluido" className="form-check-label">Concluído?</label>
                </div>
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select 
                    id="categoria" 
                    className="form-select"
                    {...register("categoria")}
                    >
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Projetos">Projetos</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <Button variant="dark" className="w-100 mt-1" type="submit">
                    Salvar Tarefa
                </Button>
            </form>
        </main>
    );
}

export default NovaTarefa;

// form-control = estilização de formulário do bootstrap
// {errors} = monitora os erros em todos os campos