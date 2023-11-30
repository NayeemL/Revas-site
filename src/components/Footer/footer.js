import React from "react";
import revasLogo from "../../images/revasLogo.png";
import Facebook from "../../images/icons/facebook.png";
import Youtube from "../../images/icons/Youtube.png";
import LinkedIn from "../../images/icons/Linkedin.png";
import Instagram from "../../images/icons/Instagram.png";
import "./footer.css";
import { Col } from "react-bootstrap";

function footer() {
  return (
    <div>
      <div className="p-2 pt-3 px-3" style={{ background: "#F8FCFF" }}>
        <div className="d-flex justify-content-between align-items-center">
          <img
            className="revas-logo align-top d-inline-block"
            src={revasLogo}
            alt="Reva's logo"
          />
          <div className="d-flex gap-3">
            <img
              className="social-media align-top d-inline-block"
              src={Facebook}
              alt="facebook"
            />
            <img
              className="social-media align-top d-inline-block"
              src={Youtube}
              alt="youtube"
            />
            <img
              className="social-media align-top d-inline-block"
              src={LinkedIn}
              alt="linkedIn"
            />
            <img
              className="social-media align-top d-inline-block"
              src={Instagram}
              alt="instagram"
            />
          </div>
        </div>
        <Col lg={8}>
          <div className="pt-2 pb-0">
            <span className="content-heading">Email</span>
            <p className="content">test@gmail.com</p>
          </div>
          <hr />
          <div>
            <span className="content-heading">Phone</span>
            <p className="content">xxxxxxxxxx</p>
          </div>
          <hr />
          <div>
            <span className="content-heading">Address</span>
            <p className="content">
              xxxxxxxxxxxxxxxxxxxxxxx
              <br /> xxxxxxxxxxxxxxxxxxxxxxxxx
              <br /> xxxxxxxxxxxxxx
            </p>
          </div>
        </Col>
      </div>
      <div className="copy-rights">
        <p className="copy-rights-content">© 2023 Reva’s. All rights reserved.</p>
      </div>
    </div>
  );
}

export default footer;
