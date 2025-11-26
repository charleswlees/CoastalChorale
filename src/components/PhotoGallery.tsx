import React, { useState } from "react";
import { Row, Col, Image, Collapse, Button } from "react-bootstrap";

interface PhotoGalleryProps {
  year: string;
  imageUrls: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ year, imageUrls }) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentId = `photos-${year}`;

  return (
    <section className="mt-5">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        <h2 className="mb-0">{year}</h2>
        <Button
          variant="link"
          className="p-0 text-decoration-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          <span aria-hidden="true">{isOpen ? "▼" : "▶"}</span>
          <span className="visually-hidden">
            {isOpen ? "Hide photos" : "Show photos"}
          </span>
        </Button>
      </div>

      <Collapse in={isOpen}>
        <div id={contentId}>
          {imageUrls.length === 0 ? (
            <p className="text-muted fst-italic">No photos available for this year yet.</p>
          ) : (
            <Row>
              {imageUrls.map((url, index) => (
                // Responsive columns: 3 on large, 2 on medium, 1 on small screens
                <Col lg={4} md={6} className="mb-4" key={url}>
                  <Image
                    src={url}
                    alt={`Group photo ${index + 1} from ${year}`}
                    thumbnail
                    fluid
                  />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Collapse>
    </section>
  );
};

export default PhotoGallery;
