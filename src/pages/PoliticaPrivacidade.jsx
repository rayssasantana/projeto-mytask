import { Container, Accordion } from "react-bootstrap";


function PoliticaProvacidade() {
    return (
        <Container className="mt-4 min-vh-100">
            <h1>Políticas de Privacidade</h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Coleta de Informações</Accordion.Header>
                        <Accordion.Body>
                            Nós coletamos informações de várias maneiras, incluindo quando você visita nosso site, se registra, faz uma compra, etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Uso das Informações</Accordion.Header>
                        <Accordion.Body>
                            As informações coletadas são usadas para melhorar o serviço, personalizar a experiência do usuário, processar transações, etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Proteção das Informações</Accordion.Header>
                        <Accordion.Body>
                            Implementamos uma variedade de medidas de segurança para manter a segurança das suas informações pessoais.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Compartilhamento de Informações</Accordion.Header>
                        <Accordion.Body>
                            Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento, exceto para parceiros confiáveis que nos ajudam a operar nosso site.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </Container>
    );
}

export default PoliticaProvacidade;