// O bjetivo deste documento é ter todas as funções relacionadas a autenticação
    // criar usuário com email/nome/senha
    // entrar com google
    // entrar com email/senha
    // logout
    import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
    import { auth } from "./config";

export async function cadastrarUsuario(nome, email, senha) {
    // Indicamos o serviço de autenticação 'auth' e o email e senha do novo usuário
    // User é um objeto com informações do usuário autenticado
    const { user } = await createUserWithEmailAndPassword(auth, email, senha); //cria o usuário
    // Define o nome de exibição como o nome vindo do formulário de cadastro
    await updateProfile(user, {displayName: nome}); // atualizar o perfil do usuário, aqui ele salva o nome.
}

export async function entrarGoogle() {
    // Indicar qual o porvedor de login será usado
    const provider = new GoogleAuthProvider();
    // Abre um pop-up na tela como login do google
    await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
    await signInWithEmailAndPassword(auth, email, senha);
}

export async function logout() {
    // Desconectar o usuário atualmente logado na aplicação
    await signOut(auth);
}