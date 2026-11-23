import { Container, Card, Row, Col } from "react-bootstrap";

import groupPhoto from "../assets/group_photos/2025/group_photo.jpg";

function Contact() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={groupPhoto}
              alt="The Coastal Chorale group"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <Card.Body className="p-4 p-md-5 text-center">
              <Card.Title as="h1" className="mb-4">
                Get in Touch
              </Card.Title>

              <h2 className="h4">Contact</h2>
              <p className="lead mb-4">
                Please contact us via email at{" "}
                <a href="mailto:test@test.com">test@test.com</a>
              </p>

              <h2 className="h4">Sponsor</h2>
              <p className="lead mb-0">
                Placeholder text on becoming a sponsor of Coastal Chorale.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
