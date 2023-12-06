import { Col, Container, Form , Row} from "react-bootstrap";

export function NewConnection() {
  return (
    <Container>
      <Container className="mt-4 text-center">
        <h3>New Connection Form</h3>
      </Container>
      <Container className="mt-4">
        <Form>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value=""
                  name="name"
                  placeholder="Enter name"
                /><br></br>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="Email"
                  value=""
                  name="email"
                  placeholder="Enter your email address"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}
