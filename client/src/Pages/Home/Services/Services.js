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
    fetch('http://localhost:5000/few-service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <h2>My Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
              mattis, pulvinar leo Fusce quis urna metus. Donec et lacus et sem
              lacinia cursus.
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
      {services.length === 3 && (
        <Row>
          <Col>
            <Link to="/services">
              <Button className="mt-5 d-block mx-auto" variant="primary">
                See All Services
              </Button>
            </Link>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Services;

//       <div></div>
