// O propósito deste arquivo é ter todas as funções necessárias para gerenciar tarefas (CRUD - Cerate, Read, Update, Delete):
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)
import { addDoc, collection, getDocs, doc, deleteDoc, getDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "./config"; // essa importação é feita a partir do export assim: export const db = getFirestore(app);. Assim é possível exportar várias coisas de um mesmo arquivo.

// Criar uma referência para a coleção no Firestore (essa linha é muito importante)
export const tarefasCol = collection(db, "tarefas");

// Função assíncrona = o resultado não é obtido de imadiato. Haverá uma "espera/delay".
export async function addTarefa(data) {
    // Essa função se comunica com o firestore, envia os dados (data) e salva na coleção indicada.
    //data: objeto com os dados do formuário
    await addDoc(tarefasCol, data); 
    // await é uma instrução para esperar o resultado de addDoc
}

// Essa função não será mais utilizada
export async function getTarefas() {
    // Snapshot é o resultado da busca na coleção de tarefas
    const snapshot = await getDocs(tarefasCol); // busca os dados de tarefa do Firebase
    const tarefas = []; // inserir objetos no formato de objeto com id e as propriedades de tarefa | array vazio que vai inserir os obj na forma de obj e não de doc como vem do Firebase

    // Percorremos cada documento da coleção e inserimos no array de tarefas
    snapshot.forEach(doc => { // para cada documento na coleção eu pego ele e gero o objeto
        tarefas.push({ ...doc.data(), id: doc.id }) // pega os dados que existem no documento, coloca dentro do objeto e coloca o id
    });

    return tarefas;
}

export async function getTarefasUsuario(idUsuario) {
    // Filtrar as tarefas da coleção de acordo com o id do usuário
    const filtro = query(tarefasCol, where("idUsuario", "==", idUsuario));

    const snapshot = await getDocs(filtro);
    const tarefas = [];

    snapshot.forEach((doc) => {
        tarefas.push({...doc.data(), id: doc.id});
    });

    return tarefas;
}

export async function deleteTarefa(id) {
    // Cria uma referência para um documento da coleção
    const tarefaDoc = doc(tarefasCol, id); // id do documento que eu quero apagar
    // Deletar o documento da coleção de acordo com o id
    await deleteDoc(tarefaDoc) // referencia do documento
}

export async function getTarefa(id) {
    // Criar uma referência para um documento específico da coleção
    const tarefaDoc = doc(tarefasCol, id);
    // Trazer as informações (dados) do documento
    const snapshot = await getDoc(tarefaDoc); // pega o objeto do documento e joga na variável tarefa/snapshot.

    // Pega o tarefa/snapshot e retorna/extrai os dados de dentro do documento
    //{titulo: "", descricao: "",...}
    return snapshot.data();
}

export async function updateTarefa(id, data) {
    const tarefaDoc = doc(tarefasCol, id);
    await updateDoc(tarefaDoc, data); // manda a atualização para o documento da coleção
}