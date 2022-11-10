import React, { useEffect, useState } from 'react';
import './Services.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceSummaryCard from './ServiceSummaryCard/ServiceSummaryCard';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useSetTitle from '../../../hooks/useSetTitle';

const Services = () => {
  const [services, setServices] = useState([]);

  useSetTitle('Services');

  useEffect(() => {
    fetch('https://nurturing-minds-server-side.vercel.app/few-service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-5 home-page-service-section">
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h2>
                My <span style={{ color: 'aqua' }}>Services</span>
              </h2>
              <p>
                Your problems can be depression, anxiety, bipolar disorders,
                relationship thoughts of suicide, or others. I am here to help
                you to overcome your problem.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="service-card-container">
              {services.map((service, index) => (
                <ServiceSummaryCard
                  key={index}
                  service={service}
                ></ServiceSummaryCard>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/services" className="text-decoration-none">
              <Button
                className="fw-semibold btn-register text-white mt-5 d-block mx-auto"
                variant="primary"
              >
                See All Services
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

//       <div></div>
