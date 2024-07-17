import { Container, Figure } from "react-bootstrap";
import "../NotFound.css";

function NotFound() {
    return (
        <main className="mt-4">
            <Container>
                <Figure>
                    <Figure.Image
                        width={400}
                        height={400}
                        alt="171x180"
                        src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1880.jpg?t=st=1720639415~exp=1720643015~hmac=079fd0d7905d64da015e7f6d13d9193b652f13802de9f9288391ac5d07e5b360&w=740"
                    />
                    <Figure.Caption>
                        <h2>Erro 404 - Página não encontrada</h2>
                        <p>Desculpe, ocorreu um erro, a página solicitada não foi encontrada!</p>
                    </Figure.Caption>
                </Figure>
            </Container>
        </main>
    );
}

export default NotFound;