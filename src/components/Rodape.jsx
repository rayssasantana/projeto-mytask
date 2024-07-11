import { Link } from 'react-router-dom';
import "../Rodape.css";

function Rodape() {
    return (
        <footer className="bg-dark text-white py-3">
                &copy; 2024 Rayssa Santana. Todos os direitos reservados.
                <Link to="/politicas-de-privacidade">Políticas de Privacidade</Link>
        </footer>
    );
}

export default Rodape;

