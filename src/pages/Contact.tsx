import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import groupPhoto from "../assets/group_photos/2025/group_photo.jpg";

function Contact() {
  const contactEmail = "info@coastalchorale.org";

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="text-center shadow-sm">
            <Card.Img
              variant="top"
              src={groupPhoto}
              alt="The Coastal Chorale group"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <Card.Body className="p-4 p-md-5">
              <Card.Title as="h1" className="mb-3">
                Get in Touch
              </Card.Title>
              <Card.Text className="lead mb-4">
                We'd love to hear from you! Whether you have a question about
                our next performance, are interested in booking the group, or
                want to know more about auditions, here's how you can reach us.
              </Card.Text>

              <div className="mb-4">
                <h5 className="text-muted">The Best Way to Reach Us</h5>
                <p>
                  For all inquiries, please send an email to our general inbox.
                </p>
                <Button
                  href={`mailto:${contactEmail}`}
                  variant="primary"
                  size="lg"
                >
                  Email: {contactEmail}
                </Button>
              </div>

              <hr />

              <div className="mt-4">
                <h5 className="text-muted">Follow Our Journey</h5>
                <p>Stay up to date with our latest news and media.</p>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=61560039329545"
                    className="text-dark mx-3"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/coastal.chorale?utm_source=ig_web_button_share_sheet&igsh=Z2JrbzBiajEwNmsy"
                    className="text-dark mx-3"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={30} />
                  </a>
                  <a href="#" className="text-dark mx-3" aria-label="YouTube">
                    <FaYoutube size={30} />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
