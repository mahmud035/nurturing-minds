import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import './AllService.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceSummaryCard from '../ServiceSummaryCard/ServiceSummaryCard';

const AllService = () => {
  const services = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(services);
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
    </Container>
  );
};

export default AllService;
