import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './imageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <Container>
      <Row noGutters>
        {images.map((image, index) => (
          <Col key={index} xs={12} md={4} className="mb-0 p-0">
            <Image className="img-fluid d-block mx-auto gallery-img" src={image} alt={`Image ${index}`}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGallery;