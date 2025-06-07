import React from "react";
import { Row, Col, Image } from "react-bootstrap";

interface PhotoGalleryProps {
  year: string;
  imageUrls: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ year, imageUrls }) => {
  if (imageUrls.length === 0) {
    return (
      <>
        <h2 className="mt-5 border-bottom pb-2 mb-4">{year}</h2>
        <p>No photos available for this year yet.</p>
      </>
    );
  }

  return (
    <>
      <h2 className="mt-5 border-bottom pb-2 mb-4">{year}</h2>
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
    </>
  );
};

export default PhotoGallery;
