import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function entrar(data) {
        // data é um objeto com os dados do formulário (email e senha)
        console.log(data);
    }

    return (
        <main className="min-vh-100">
            <form className="form-section" onSubmit={handleSubmit(entrar)}>
                <h1>Login</h1>
                <hr />
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", { required: "O email é obrigatório!" })} // captura o email do usuário. Esse nome vai ficar no objeto, sendo muito importante.
                    />
                    {errors.email && <small className="invalid">{errors.email.message}</small>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type={"password"} id={"senha"} className={"form-control"}
                        {...register("senha", {
                            required: "A senha é obrigatória!",
                            minLength: { value: 6, message: "Mínimo de 6 caracteres." },
                            maxLength: { value: 10, message: "Máximo de caracteres." }
                        })}
                    />
                    {errors.senha && <small className="invalid">{errors.senha.message}</small>}
                </div>
                <Button variant="dark" className="mt-1 w-100" type="submit">Entrar</Button>
                <Button variant="danger" className="mt-1 w-100" type="button">Entrar com o Google</Button>
            </form>
        </main>
    );
}

export default Login;

// w-100 = ocupa 100%
// type="button" = funciona como botão normal