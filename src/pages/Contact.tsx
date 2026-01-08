
import React, { useState, useRef } from "react"; // Import useState and useRef
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import groupPhoto from "../assets/group_photos/2025/group_photo.jpg";

const ThankYouMessage: React.FC = () => (
  <div className="text-center p-4">
    <FaCheckCircle size={50} className="text-success mb-3" />
    <h3 className="mb-2">Thank You!</h3>
    <p className="lead">Your message has been sent successfully.</p>
    <p>We'll get back to you as soon as possible.</p>
  </div>
);

function Contact() {
  const googleFormEmbedUrl =
    import.meta.env.VITE_GOOGLE_FORM_LINK;

  // --- NEW: State to track form submission ---
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formLoadedRef = useRef(false);

  const handleFormLoad = () => {
    if (formLoadedRef.current) {
      setIsSubmitted(true);
    } else {
      formLoadedRef.current = true;
    }
  };

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
              <Card.Title as="h1" className="mb-3">
                Get in Touch
              </Card.Title>
              {!isSubmitted && (
                <Card.Text className="lead mb-4">
                  We'd love to hear from you! Please use the form below to send
                  us a message.
                </Card.Text>
              )}
            </Card.Body>

            <Card.Body className="p-4 p-md-5 pt-0">
              {isSubmitted ? (
                <ThankYouMessage />
              ) : (
                <div className="google-form-container">
                  <iframe
                    src={googleFormEmbedUrl}
                    title="Contact Form"
                    allowFullScreen
                    style={{ border: 0 }}
                    onLoad={handleFormLoad} // <-- Attach the event handler here
                  >
                    Loading…
                  </iframe>
                </div>
              )}
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
