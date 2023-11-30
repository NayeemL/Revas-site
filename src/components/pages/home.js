import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import bannerImg from "../../images/banner_img.png";
import bannerImg2 from "../../images/Photo2.jpg";
import PanTone from "../../images/icons/pantone.png";
import PlyWood from "../../images/icons/plywood.png";
import Room from "../../images/icons/room.png";
import Search from "../../images/icons/search.png";
import Warranty from "../../images/icons/warranty.png";
import Whatsapp from "../../images/icons/whatsapp.png";
import Char from "../../images/icons/benchImg.png";
import Char2 from "../../images/icons/charImg.png";
import Img1 from "../../images/d-images/Image1.png";
import Img2 from "../../images/d-images/Image2.png";
import Img3 from "../../images/d-images/Image3.png";
import Img4 from "../../images/d-images/Image4.png";
import Img5 from "../../images/d-images/Image5.png";
import Img6 from "../../images/d-images/Image6.png";
import Footer from "../Footer/footer";

import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "../Gallery/ImageGallery";

function home() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img2, Img3, Img2];
  return (
    <div>
      <Row>
        <Col lg={12}>
          <img
            className="img-fluid d-block banner-img"
            src={bannerImg}
            alt="banner"
          />
          <h3 className="banner-heading-wrap">Interior Made Easy.</h3>
          <div className="form-wrap">
            <Form className="form-book d-flex flex-column p-3">
              <h4>Meet a designer</h4>
              <Form.Control
                className="mb-2 w-100"
                type="text"
                placeholder="Enter Your Name"
              />
              <Form.Control
                className="mb-2"
                type="email"
                placeholder="Enter Your Email"
              />
              <Form.Control
                className="mb-2"
                type="number"
                placeholder="Mobile No"
              />
              <Form.Control className="mb-2" type="number" placeholder="Pin" />
              <Form.Control className="mb-2" type="text" placeholder="City" />
              <Form.Select defaultValue="State / Region" className="mb-2">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "200px" }}
                >
                  Book a Consultation
                </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col lg={12}>
          <img
            className="img-fluid d-block mx-auto"
            src={bannerImg2}
            alt="banner2"
          />
        </Col>
      </Row>
      <Row className="mt-3 px-2">
        <Col xs={12}>
          <h5>PRODUCT CATEGORIES</h5>
          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={Img1} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Modular Living Room</h5>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={Img2} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Modular Living Room</h5>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={bannerImg2} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Modular Living Room</h5>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={Img4} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Modular Living Room</h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={Img4} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Living Room</h5>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={bannerImg2} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Living Room</h5>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={Img5} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Living Room</h5>
                  </div>
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={Img6} alt="..." />
                    </div>
                    <h5 className="card-title p-2 pb-0">Modular Living Room</h5>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} className="d-flex flex-column">
          <h4 className="text-center">WHY CHOOSE US?</h4>
          <div className="trade-wrapper pt-4">
            <Row
              xs={12}
              className="justify-content-around text-center align-items-md-start"
            >
              <Col xs={6} sm={3} md={2}>
                <div className="trade-info">
                  <img src={PanTone} alt="Trade Icon" className="trade-icon" />
                  <p className="trade-text text-wrap">
                    CUSTOMISE TO MATCH YOUR INTERIORS AND CHOICE
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={3} md={2}>
                <div className="trade-info">
                  <img src={Room} alt="Trade Icon" className="trade-icon" />
                  <p className="trade-text text-wrap">FREE 2D and 3D DESIGN</p>
                </div>
              </Col>
              <Col xs={6} sm={3} md={2}>
                <div className="trade-info">
                  <img src={Search} alt="Trade Icon" className="trade-icon" />
                  <p className="trade-text text-wrap">
                    GERMAN TESTED LONG LASTING MECHANISMS USED
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={3} md={2}>
                <div className="trade-info">
                  <img src={Warranty} alt="Trade Icon" className="trade-icon" />
                  <p className="trade-text text-wrap">
                    Upto 10 YEARS OF UNCONDITIONAL WARRANTY
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={3} md={2}>
                <div className="trade-info">
                  <img src={PlyWood} alt="Trade Icon" className="trade-icon" />
                  <p className="trade-text text-wrap">
                    BRANDED HIGH DURABILITY PLYWOOD USED
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="text-center py-3">
        <Button style={{ borderRadius: "10px", width: "auto" }}>
          <FontAwesomeIcon icon={faPhone} /> Call Now
        </Button>
      </div>
      <div className="px-5">
        <h4 className="text-right">Gallery</h4>
        <ImageGallery images={images} />
      </div>
      <div className="d-flex align-items-center justify-content-end gap-2 px-4">
        <p className="text-end mt-3">
          Need Help? <strong>Chat with us</strong>
        </p>
        <img
          src={Whatsapp}
          alt="whatsapp-logo"
          className="whatsapp-logo img-fluid d-block"
        />
      </div>
      <Row>
        <Col xs={12} className="d-flex flex-column">
          <h4 className="text-center">TESTIMONIALS</h4>
          <div className="testimonials-wrapper pt-4">
            <div className="testimonials-icon-wrapper">
              <img
                src={Char}
                className="testimonials-logo left img-fluid d-block mx-auto"
                alt="testimonials-icon1"
              />
              <img
                src={Char2}
                className="testimonials-logo right img-fluid d-block mx-auto"
                alt="testimonials-icon2"
              />
            </div>
            <div className="px-4 my-4">
              <Row className="gap-3">
                <Card as={Col}>
                  <Card.Body>
                    <Card.Title>Vijay</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Tamil Nadu
                    </Card.Subtitle>
                    <Card.Text>
                      We were looking for wall mounted customized dining table.
                      They understood our requirement and deliver exactly the
                      same. Excellent service and product quality from them
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card as={Col}>
                  <Card.Body>
                    <Card.Title>Vijay</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Tamil Nadu
                    </Card.Subtitle>
                    <Card.Text>
                      We were looking for wall mounted customized dining table.
                      They understood our requirement and deliver exactly the
                      same. Excellent service and product quality from them
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card as={Col}>
                  <Card.Body>
                    <Card.Title>Vijay</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Tamil Nadu
                    </Card.Subtitle>
                    <Card.Text>
                      We were looking for wall mounted customized dining table.
                      They understood our requirement and deliver exactly the
                      same. Excellent service and product quality from them
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default home;
