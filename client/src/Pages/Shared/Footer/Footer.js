import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../../assets/images/logo.png';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <Container className="footer pt-5 pb-4">
        <Row>
          <Col xs={6} lg={2}>
            <div className="pb-3">
              <h4>Powered By</h4>
              <div>
                <img src={logo} width="60" height="60" alt="" />
                <h6 className=" fs-3 text-white mt-2">Nurturing Minds</h6>
              </div>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div className="pb-3">
              <h4>Support</h4>
              <div>
                <p>Support</p>
                <p>Help Center</p>
                <p>Skills Plan</p>
                <p>Flow Plans</p>
                <p>Site Map</p>
              </div>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div className="pb-3">
              <h4>My Account</h4>
              <div>
                <p>Profile</p>
                <p>Credits</p>
                <p>Account</p>
                <p>Purchase</p>
                <p>Preference</p>
              </div>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div className="pb-3">
              <h4>Nurturing Minds</h4>
              <div>
                <p>Blog</p>
                <p>About Us</p>
                <p>Refund Policy</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
          </Col>

          <Col xs={10} sm={8} md={6} lg={4}>
            <div className="pb-3">
              <h4>Newsletter</h4>
              <div>
                <p>Sign up with your email to join our mailing list.</p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I would like to receive emails from BrainStormy."
                    />
                  </Form.Group>

                  <Button
                    variant="info"
                    type="submit"
                    className="rounded-pill  fw-semibold btn-register text-white"
                  >
                    Subscribe
                  </Button>
                </Form>
                <div
                  className="d-flex gap-3 pt-4"
                  style={{ cursor: 'pointer' }}
                >
                  <FaFacebookSquare size={32} />
                  <FaInstagram size={32} />
                  <FaLinkedin size={32} />
                  <FaYoutube size={32} />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div>
          <p className="text-center pt-4">
            Copyright &copy; 2022 Nurturing Minds. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
