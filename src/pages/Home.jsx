import { Container, Card, Button } from "react-bootstrap";
import "../Home.css";

function Home() {
    return (
        <main className="mt-4 min-vh-100">
            <Container>
                <h1>Home</h1>
                <section className="card-caixa">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/illustration-people-s-daily-life_53876-6906.jpg?t=st=1720644466~exp=1720648066~hmac=1f9ba4e32eba81ccf76a207135df97b791a19f2d8e8901ce900289f98241de5b&w=740" />
                        <Card.Body className="card-body-caixa">
                            <Card.Title>Gerencie Suas Tarefas</Card.Title>
                            <Card.Text className="card-body-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="info">Confira o artigo</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/woman-working-multitask-activities_23-2148823002.jpg?t=st=1720644186~exp=1720647786~hmac=bcaf86e467d7b3e40fd3c3ac6efbea02e6c882a28485e0e37831ac56a7f157a8&w=740" />
                        <Card.Body className="card-body-caixa">
                            <Card.Title>Aumentar a Produtividade</Card.Title>
                            <Card.Text className="card-body-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="info">Confira o artigo</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/appointment-booking-mobile-design_23-2148573175.jpg?t=st=1720644274~exp=1720647874~hmac=33d2f81a30918eaa81d3716e0f059e2b683bc04d0a4875323b5471f094a65cb7&w=740" />
                        <Card.Body className="card-body-caixa">
                            <Card.Title>Configurando Lembretes</Card.Title>
                            <Card.Text className="card-body-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="info">Confira o artigo</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18em' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-vector/appointment-booking-mobile_23-2148581761.jpg?t=st=1720644535~exp=1720648135~hmac=4afc1fc730ea9aabf024cf6345f0e005f8dd1b2fb3c39e635b18abeed103c864&w=740" />
                        <Card.Body className="card-body-caixa">
                            <Card.Title>Sincronize Suas Tarefas</Card.Title>
                            <Card.Text className="card-body-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="info">Confira o artigo</Button>
                        </Card.Body>
                    </Card>                    
                </section>
            </Container>
        </main>
    );
}

export default Home;